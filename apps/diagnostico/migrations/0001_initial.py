# Generated by Django 3.1.7 on 2023-06-28 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Diagnostico',
            fields=[
                ('id_diagnostico', models.AutoField(primary_key=True, serialize=False)),
                ('condicion_antes', models.CharField(max_length=200)),
                ('observaciones', models.CharField(max_length=200)),
                ('condicion_despues', models.CharField(max_length=200)),
                ('derivado_EESS', models.CharField(max_length=100)),
                ('derivado_medico', models.CharField(max_length=100)),
            ],
        ),
    ]
