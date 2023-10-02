from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from accounts.models import UserProfile
from movies.models import Movie
from .serializers import MovieSerializer

class Watchlist(APIView):
    def get(self, request):
        user = request.user  # Get the currently logged-in user
        
        try:
            profile = UserProfile.objects.get(user=user)
            watchlist_movies = profile.favorite_movies.all().order_by('-date_added')  # Retrieve the user's watchlist movies

            # Serialize the watchlist movies data
            serializer = MovieSerializer(watchlist_movies, many=True)

            return Response(serializer.data, status=status.HTTP_200_OK)

        except UserProfile.DoesNotExist:
            return Response({'message': 'User profile not found.'}, status=status.HTTP_404_NOT_FOUND)
    
    
    def post(self, request):
        movie_id = request.data.get('movie_id')
        movie_title = request.data.get('movie_title')
        movie_img = request.data.get('movie_img')
        user = request.user
        print(movie_img, 'THIS IS THE MOVIE IMG')

        try:
            profile = UserProfile.objects.get(user=user)
            if not profile.favorite_movies.filter(movie_id=movie_id).exists():
                movie = Movie.objects.create(movie_id=movie_id, title=movie_title, movie_img=movie_img)
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
            if profile.favorite_movies.filter(movie_id=movie_id).exists():
              movie = profile.favorite_movies.get(movie_id=movie_id)
              profile.favorite_movies.remove(movie)
              return Response({'message': 'Movie removed from watchlist.'}, status=status.HTTP_200_OK)
            else:
                return Response({'message': 'Movie not found in watchlist.'}, status=status.HTTP_404_NOT_FOUND)

        except UserProfile.DoesNotExist:
            return Response({'message': 'User profile not found.'}, status=status.HTTP_404_NOT_FOUND)
