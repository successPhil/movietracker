from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from accounts.models import UserProfile
from movies.models import Movie

class AddToWatchlist(APIView):
    def post(self, request):
        movie_id = request.data.get('movie_id')
        movie_title = request.data.get('movie_title')
        user = request.user
        

        try:
            profile = UserProfile.objects.get(user=user)
            movie, created = Movie.objects.get_or_create(movie_id=movie_id, defaults={'title': movie_title})

            # Check if the movie is already in the user's favorites
            if movie not in profile.favorite_movies.all():
                profile.favorite_movies.add(movie)
                return Response({'message': 'Movie added to watchlist.'}, status=status.HTTP_200_OK)
            else:
                return Response({'message': 'Movie already in watchlist.'}, status=status.HTTP_200_OK)

        except UserProfile.DoesNotExist:
            return Response({'message': 'User profile not found.'}, status=status.HTTP_404_NOT_FOUND)

class RemoveFromWatchlist(APIView):
    def delete(self, request, movie_id):
        user = request.user

        try:
            profile = UserProfile.objects.get(user=user)
            movie = Movie.objects.get(movie_id=movie_id)

            # Check if the movie is in the user's watchlist
            if movie in profile.favorite_movies.all():
                profile.favorite_movies.remove(movie)
                return Response({'message': 'Movie removed from watchlist.'}, status=status.HTTP_200_OK)
            else:
                return Response({'message': 'Movie not found in watchlist.'}, status=status.HTTP_404_NOT_FOUND)

        except UserProfile.DoesNotExist:
            return Response({'message': 'User profile not found.'}, status=status.HTTP_404_NOT_FOUND)
