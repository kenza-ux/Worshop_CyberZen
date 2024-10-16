<script>
export default {
  name: "NavBar",
};
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
      <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>

          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <!-- Barre de recherche centrée -->
        <form class="d-flex mx-auto" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <!-- Icone d'alerte à droite -->
        <a class="navbar-brand" href="/">
          <img src="@/assets/logo_alerte.png" alt="Logo" class="logo" />
        </a>
        <a class="navbar-brand" href="/">
          <img src="@/assets/icone_avatar.png" alt="Logo" class="logo" />
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Styles pour fixer la navbar en haut de la page */
.navbar {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Assure que la navbar est devant les autres éléments */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optionnel: ajout d'une ombre */
}
/* Style pour le logo */
.logo {
  height: 50px;
  width: auto;
}
/* Centrer la barre de recherche */
.mx-auto {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

/* Ajout de marge pour éviter le chevauchement avec le contenu principal */
main {
  padding-top: 70px;
}
</style>
