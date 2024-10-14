import matplotlib.pyplot as plt
import numpy as np
from PIL import Image

# Cargar la imagen del mapa de América Latina
map_img = Image.open('mapa_latinoamerica.jpg')

# Centro del círculo y radio
center = (0, 0)  # Esto se ajustará dependiendo de tu mapa
radius = 5
num_points = 12  # Número de puntos

# Distribuir los puntos en radianes
angles = np.linspace(0, 2 * np.pi, num_points, endpoint=False)

# Crear figura y cargar la imagen del mapa
fig, ax = plt.subplots()

# Mostrar la imagen del mapa como fondo
ax.imshow(map_img, extent=[-10, 10, -10, 10])  # Ajusta 'extent' según la escala del mapa

# Coordenadas x e y para los puntos (ajusta las coordenadas para tu mapa)
x_points = center[0] + radius * np.cos(angles)
y_points = center[1] + radius * np.sin(angles)

# Dibujar los puntos en gris
ax.scatter(x_points, y_points, color='gray')

# Eliminar los ejes
ax.axis('off')

# Guardar la imagen con fondo transparente
plt.savefig('mapa_puntos_radianes_sobre_latinoamerica.png', transparent=True)

# Mostrar el gráfico
plt.show()
