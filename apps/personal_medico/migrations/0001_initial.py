# Generated by Django 3.1.7 on 2023-06-28 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PersonalMedico',
            fields=[
                ('id_personal', models.AutoField(primary_key=True, serialize=False)),
                ('nombres', models.CharField(max_length=100)),
                ('apellidos', models.CharField(max_length=100)),
                ('turno', models.CharField(max_length=50)),
                ('dni', models.CharField(max_length=20)),
                ('salida_cantidad', models.IntegerField()),
            ],
        ),
    ]
