# Generated by Django 3.1.7 on 2023-06-26 15:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('samumod', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paciente',
            name='accidente',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='paciente',
            name='prioridad_emergencia',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
