# Generated by Django 3.1.7 on 2023-06-28 16:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('personal_medico', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='InformanteAtencion',
            fields=[
                ('id_llamada', models.AutoField(primary_key=True, serialize=False)),
                ('tipo_llamada', models.CharField(max_length=50)),
                ('fecha', models.DateField()),
                ('hora', models.TimeField()),
                ('turno', models.CharField(max_length=50)),
                ('telefono_infor', models.CharField(max_length=20)),
                ('nombres_infor', models.CharField(max_length=50)),
                ('apellidos_infor', models.CharField(max_length=50)),
                ('dni_infor', models.CharField(max_length=20)),
                ('gen_infor', models.CharField(blank=True, max_length=20, null=True)),
                ('id_personal', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='personal_medico.personalmedico')),
            ],
        ),
    ]
