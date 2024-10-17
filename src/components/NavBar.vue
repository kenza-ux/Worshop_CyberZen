<script setup>
import { ref } from 'vue';
import AlerteButton from './AlerteButton.vue';

const showAlerteModal = ref(false);
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <!-- Logo du site-->
      <a class="navbar-brand" href="/">
        <img src="@/assets/cyber.png" alt="Logo" class="logo" />
      </a>
      <!-- Bouton pour la navigation sur petits écrans -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Contenu de la navbar -->
      <div id="navbarSupportedContent" class="collapse navbar-collapse justify-content-between">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Accueil</a>
          </li>
        </ul>
        <!-- Barre de recherche centrée -->
        <form class="d-flex mx-auto" role="search">
          <input class="form-control me-2" type="search" placeholder="saisissez un mot clé" aria-label="search" />
          <button class="btn btn-outline-success" type="submit">Chercher</button>
        </form>
        <!-- Icone d'alerte à droite -->
        <button @click="showAlerteModal = true" class="navbar-brand">
          <img src="@/assets/logo_alerte.png" alt="Alerte" class="logo" />
        </button>
        <a class="navbar-brand" href="/">
          <img src="@/assets/icone_avatar.png" alt="Avatar" class="logo" />
        </a>
      </div>
    </div>
    <!-- Inclusion du composant modal -->
    <AlerteButton v-if="showAlerteModal" @close="showAlerteModal = false" />
  </nav>
</template>

<style scoped>
/* Styles pour fixer la navbar en haut de la page */
.navbar {
  top: 0;
  left: 0;
  z-index: 1000; /* Assure que la navbar est devant les autres éléments */
  width: 100%;
  box-shadow: 0 4px 6px rgb(0 0 0 / 10%); /* Optionnel: ajout d'une ombre */
}

/* Style pour le logo */
.logo {
  width: auto;
  height: 50px;
}

/* Centrer la barre de recherche */
.mx-auto {
  width: 50%;
  margin-right: auto;
  margin-left: auto;
}
</style>
