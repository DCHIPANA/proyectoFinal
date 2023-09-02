from django.db import models
from django.contrib.auth.models import User
from datetime import date
# Create your models here.

class datosUsuario(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    tipoUsuario = models.CharField(max_length=32,default='USUARIO')
    nroCelular = models.CharField(max_length=32, default='999888777')
    profesionUsuario = models.CharField(max_length=32, default='DEVELOPER')
    perfilUsuario = models.CharField(max_length=512, default='')
    fechaIngreso = models.DateField(default=date.today)

class tareasInformacion(models.Model):
    usuarioRelacionado = models.ForeignKey(User, on_delete=models.CASCADE)
    descripcionTarea = models.CharField(max_length=512, default='')
    fechaInicio = models.DateField(default=date.today)
    fechaFin = models.DateField(default=date.today)
    estadoTarea = models.CharField(max_length=32,default='PROCESO')

class comentarioTarea(models.Model):
    tareaRelacionada = models.ForeignKey(tareasInformacion, on_delete=models.CASCADE)
    usuarioRelacionado = models.ForeignKey(User, on_delete=models.CASCADE)
    comentarioTarea = models.CharField(max_length=512, default='')