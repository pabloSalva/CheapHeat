# Generated by Django 2.2.7 on 2019-11-05 19:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('consumo', '0007_constructor_pared_ventana_vivienda'),
    ]

    operations = [
        migrations.RenameField(
            model_name='material',
            old_name='conductividad_termica',
            new_name='transmitancia_termica',
        ),
    ]
