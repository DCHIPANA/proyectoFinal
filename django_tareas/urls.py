from django.urls import path
from . import views

app_name = 'django_tareas'

urlpatterns = [
    path('', views.index,name='index'),
    path('consolaAdministrador',views.consolaAdministrador,name='consolaAdministrador'),
    path('cerrarSesion',views.cerrarSesion,name='cerrarSesion'),
    path('eliminarUsuario/<str:ind>',views.eliminarUsuario,name='eliminarUsuario'),
    path('verUsuario/<str:ind>',views.verUsuario, name='verUsuario'),
    path('nuevaTarea/<str:ind>', views.nuevaTarea, name='nuevaTarea'),
    path('devolverMensaje', views.devolverMensaje, name='devolverMensaje'),
    path('conseguirInfoTarea',views.conseguirInfoTarea,name='conseguirInfoTarea'),
    path('eliminarTarea/<str:idTarea>&<str:idUsuario>',views.eliminarTarea,name='eliminarTarea'),
    path('descargarTareas/<str:idUsuario>',views.descargarTareas,name='descargarTareas'),
    path('react', views.react, name='react'),
    path('iterarReact',views.iterarReact,name='iterarReact'),
    path('publicarComentario',views.publicarComentario,name='publicarComentario'),
    path('descargarReporteUsuarios/<str:idUsuario>',views.descargarReporteUsuarios,name='descargarReporteUsuarios'),
    path('conseguirInfoUsuario',views.conseguirInfoUsuario,name='conseguirInfoUsuario'),
    path('actualizarUsuario',views.actualizarUsuario,name='actualizarUsuario'),
]