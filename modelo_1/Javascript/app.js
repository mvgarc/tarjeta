var app = {
  invitadosFn: function () {
    console.log(invitados);

    $(".modal-bienvenida-body h2").html("Fam. Peralta");
    $(".usr-nombre").val(invitados.invitado);
    $(".usr-correo").val(invitados.email);
    for (var i = 1; i <= invitados.asistentes; i++) {
      $("#invitados").append(
        "<option value='" + i + "'>" + i + " invitado(s)</option>"
      );
    }
  },
  enviarConfirmacion: function (event) {
    event.preventDefault();
    localStorage.setItem("confirmado", true);
    alergia_input = $("#alergia").val() == null ? "" : $("#alergia").val();
    alcohol_input = $("#alcohol").val() == null ? "" : $("#alcohol").val();
    cancion_input = $("#cancion").val() == null ? "" : $("#cancion").val();
    var data = {
      user_name: $(".usr-nombre").val(),
      user_email: $(".usr-correo").val(),
      user_comentarios: $(".deseos-invitados").val(),
      user_invitados: $(".num-invitados").val(),
      uid_fire: infoInvitacion.uid,
      cancion: $("#cancion").val(),
      admin_user: infoInvitacion.correo,
      hashtag: infoInvitacion.hashtag,
      url_boda: infoInvitacion.url + "/",
      direccion_texto: infoInvitacion.direccion,
      historia: infoInvitacion.historia,
      llave_invitado: window.location.search.replace(/\?/g, ""),
    };
    $.ajax({
      type: "GET",
      url: "https://invitacionesinteligentes.mx/notificaciones-mbl/endpoint-mail-qr.php",
      dataType: "json",
      data: data,
      beforeSend: function (data) {
        $(".wrap-send").fadeIn();
      },
      success: function (respuesta) {
        console.log(respuesta);
        setTimeout(function () {
          $(".enviando").hide();
          $(".wrap-send").html(
            "<h1>¡Muchas Gracias por tu confirmación te esperamos en nuestra Boda!</h1>"
          );
        }, 3000);
      },
      error: function (respuesta) {
        console.log(respuesta);
        $(".enviando").hide();
        $(".wrap-send").html(
          "<h1>¡Muchas Gracias por tu confirmación te esperamos en nuestra Boda!</h1>"
        );
      },
    });
    firebase
      .database()
      .ref("datosBoda/" + data.uid_fire + "/invitados")
      .push({
        nombre_invitado: data.user_name,
        correo_invitado: data.user_email,
        num_invitado: data.user_invitados,
        deseos_invitados: data.user_comentarios,
        fecha_invitado: Date(Date.now()),
        alergia: alergia_input,
        alcohol: alcohol_input,
        cancion: cancion_input,
        codigo: window.location.search.replace(/\?/g, ""),
      });
  },
  galeriaOpt2: {
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    margin: -24,
    stagePadding: 70,
    responsiveClass: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  },
  galeriaOpt: {
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    margin: 40,
    stagePadding: 20,
    responsiveClass: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      568: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  },

  galeria: function () {
    $(".galeria2 .owl-carousel").owlCarousel(this.galeriaOpt2);
    // $(".galeria .owl-carousel").owlCarousel(this.galeriaOpt);
  },
  recomendacionesOpt: {
    margin: 25,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3600,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    stagePadding: 34,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  },
  recomendaciones: function () {
    $("#recomendaciones-carousel").owlCarousel(this.recomendacionesOpt);
  },
  reloj: function () {
    setInterval(function () {
      contador(infoInvitacion.fechaJs);
    }, 1000);
  },
  abrirRecomendacion: function (recomendacion) {
    $(".modal-wrap").load(recomendacion + ".html");
    $(".modal-container").fadeIn();
  },
  reproducirMusica: function () {
    var _e = $(".btn-musica"),
      _a = $("audio");
    _e.toggleClass("pausa");
    _e.hasClass("pausa") ? _a.get(0).pause() : _a.get(0).play();
  },
  cerrarModal: function (e) {
    $(".modal-container").fadeOut();
  },
  cerrarModalWelcome: function () {
    $(".modal-bienvenida").fadeOut("slow");
  },
  delayModalWelcome: function (tiempo) {
    setTimeout(() => {
      this.cerrarModalWelcome();
    }, tiempo);
  },
  init: function () {
    this.galeria();
    this.recomendaciones();
    this.reloj();
    this.delayModalWelcome(3400);
  },
};
app.init();
setTimeout(function () {
  $(".btn-musica").addClass("hide");
}, 1800);
$.stellar({
  responsive: true,
});
if (localStorage.getItem("confirmado") == "true") {
  $(".wrap-send")
    .html(
      "<h1>¡Muchas Gracias por tu confirmación te esperamos en nuestra Boda!</h1>"
    )
    .show();
}
// Recomendaciones
invitados == null
  ? $(".modal-container")
      .show()
      .html(
        `<div class="modal-wrap"><div class="wrap-info-modal"><h3>Disculpe las molestias</h3><p>No podemos encontrar tu invitación, por favor contactar a los novios.</p></div>`
      )
  : app.invitadosFn();
