// VKİ: vuvut Kitle indeksi
//kilo
//boy
//vki_hesapla

// 18.5 ve altı Düşük Kilolu
// 18.5 - 24.9 Normal Kilolu
// 25-29.9 Fazla Kilolu
// 30-40 Obez
// 40 ve üstü Aşırı Obez

$(function () {
  $("#vki_hesapla").on("click", function () {
    let kilo = Number($("#kilo").val());
    let boy = Number($("#boy").val()) / 100;

    //Vücut Kitle İndeksi (VKİ) = Vücut Ağırlığı (kg.) / Boy uzunluğunun karesi (m2.)
    let vki = kilo / Math.pow(boy, 2);

    let yuvarlama = Math.round(vki);
    //sonuc:
    $("#sonuc").html(vki);
    if (yuvarlama < 18) {
      $("#sonuc2").html("<i> <b>Düşük Kilolu<</b>  /i>");
    } else if (18 <= yuvarlama && yuvarlama < 24) {
      $("#sonuc2").html("<i><b>Normal Kilolu</b></i>");
    } else if (24 <= yuvarlama && yuvarlama < 29) {
      $("#sonuc2").html("<i><b>Fazla Kilolu</b></i>");
    } else if (30 <= yuvarlama && yuvarlama < 40) {
      $("#sonuc2").html("<i><b>Obez Kilolu</b></i>");
    } else if (yuvarlama >= 40) {
      $("#sonuc2").html("<i> <b>Aşırı Obez</b>  </i>");
    }
  });
});

// Paragraf göster gizle
$(function () {
  $("#goster").click(function () {
    $("#aside-p").show();
  });

  $("#gizle").click(function () {
    $("#aside-p").hide();
  });
});

//sss sıkca sorulan sorular
$(function () {
  $("#sss").click(function () {
    $("#showsss").slideUp(1500).slideDown(1500);
  });
});

//mesaj kısmında counter
//paragraf_sayi  mesaj
$(function () {
  $("#mesaj").on("input", function (e) {
    var max = 150;
    $("#mesaj").focus();
    $("#mesaj").val($("#mesaj").val().substring(0, max));
    var mesajKalan = max - $(this).val().length;
    $("#paragraf_sayi").text("kalan karakter sayısı: " + mesajKalan);
  });
});

//login register
//registerId  registerModal
$(document).ready(function () {
  $("#basic-form").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      password: {
        required: true,
        number: true,
        min: 8,
        password: true,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        minlength: "Minumum 3 karakter giriniz",
        required: "Ad alanı boş geçemezsiniz",
      },
      password: {
        required: "Şifre  alanını boş geçemezsiniz",
        //number: "Lütfen sayısal değer giriniz",
        min: "şifre için en az 8 karakter olmalı",
      },
      email: {
        required: "Email alanını boş geçemezsiniz",
        email: "Email formatında girmediniz örneğin: xyz@deneme.com",
      },
    },
  });
});
