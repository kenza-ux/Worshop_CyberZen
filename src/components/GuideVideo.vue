<template>
  <div class="guide-container">
    <h1>Comment bloquer ou signaler un spammeur sur Instagram</h1>
    <p>Voici un tutoriel vidéo pour vous guider dans les étapes de blocage ou de signalement d'un spammeur sur Instagram.</p>

    <!-- Intégration du lecteur vidéo YouTube -->
    <div class="video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ID_DE_LA_VIDEO"
        title="Tutoriel Instagram"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuideVideo"
}
</script>

<style scoped>
.guide-container {
  padding: 20px;
  text-align: center;
}

.video-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
