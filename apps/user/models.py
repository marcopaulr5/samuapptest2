from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser, PermissionsMixin, PermissionManager, BaseUserManager, AbstractBaseUser
import os


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        user.set_password(password)
        user.save()
        Settings.objects.create(user=user)
        Profile.objects.create(user=user)
        return user

    def create_superuser(self, email, password, **extra_fields):
        user = self.create_user(email, password, **extra_fields)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    date_joined = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    desactivate_account = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def get_full_name(self):
        return self.first_name + ' ' + self.last_name

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.email


class Profile(models.Model):
    user = models.OneToOneField(UserAccount, on_delete=models.CASCADE)
    location = models.CharField(max_length=100, blank=True)
    birthdate = models.DateField(blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True)


class Settings(models.Model):
    user = models.OneToOneField(UserAccount, on_delete=models.CASCADE)
    email_notifications = models.BooleanField(default=True)
    theme_name = models.BooleanField(default=False)
