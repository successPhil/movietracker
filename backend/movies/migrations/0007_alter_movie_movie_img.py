# Generated by Django 4.2.5 on 2023-10-02 05:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0006_alter_movie_movie_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='movie_img',
            field=models.URLField(),
        ),
    ]
