document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const pseudo = document.getElementById("pseudo").value.trim();
      const solution1 = document.getElementById("solution1").value.trim();
      const solution2 = document.getElementById("solution2").value.trim();
  
      if (!pseudo || !solution1 || !solution2) {
        alert("Tous les champs sont obligatoires !");
        return;
      }
  
      // Vérification du nombre de mots (environ 1 mot = 5 caractères)
      if (solution1.split(' ').length < 50 || solution1.split(' ').length > 150) {
        alert("La Solution 1 doit contenir entre 50 et 150 mots !");
        return;
      }
      if (solution2.split(' ').length < 50 || solution2.split(' ').length > 150) {
        alert("La Solution 2 doit contenir entre 50 et 150 mots !");
        return;
      }
  
      // Si tout est OK, on envoie le formulaire
      form.submit();
      
      alert("Merci pour tes propositions ! Elles ont bien été envoyées.");
    });
  });
  
