from django.contrib import admin
from accounts.models import UserProfile

class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'get_favorite_movies']

    def get_favorite_movies(self, obj):
        return ", ".join([movie.title for movie in obj.favorite_movies.all()])

    get_favorite_movies.short_description = 'Favorite Movies'


admin.site.register([UserProfile])