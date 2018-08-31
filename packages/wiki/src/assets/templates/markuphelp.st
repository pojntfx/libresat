<button class="ui button button--formatting-help">
  <i class="heading icon"></i>
  Formatting Help
</button>

<button class="ui button button--preview">
  <i class="eye icon"></i>
  Preview
</button>

<div class="ui segment section--formatting-help">
  <h2>
    Formatting
  </h2>
  <div>
    $markuphelp$
  </div>
</div>

<div class="ui segment section--preview">
  <h2>
    Preview
  </h2>
  <div>
    <span id="previewPane"></span>
  </div>
</div>

<script>
  jQuery(".button--formatting-help").click(() => jQuery(".section--formatting-help").css("margin-top", "0").slideToggle())
  jQuery(".button--preview").click(() => { updatePreviewPane(); jQuery(".section--preview").css("margin-top", "0").slideToggle() })
  // Add code from content.st here!
</script>

<style>
  .button--formatting-help {
    margin-bottom: 1em !important;
  }

  .section--preview {
    display: none;
  }

  .section--formatting-help {
    display: none;
  }
</style>

<script>
  jQuery(document).ready(() => {
    // Add preview functionality to edit view
    updatePreviewPane = () => {
      jQuery("#previewPane").hide();
      const url = location.pathname.replace(/_edit/g, "_preview/");
      jQuery.post(
        url,
        { "raw": jQuery("#editedText").val() },
        (data) => {
          jQuery('#previewPane').html(data);
          // Process any mathematics if we're using MathML
          if (typeof (convert) == 'function') { convert(); }
          // Process any mathematics if we're using jsMath
          if (typeof (jsMath) == 'object') { jsMath.ProcessBeforeShowing(); }
          // Process any mathematics if we're using MathJax
          if (typeof (window.MathJax) == 'object') {
            // http://docs.mathjax.org/en/latest/typeset.html
            const math = document.getElementById("MathExample");
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, math]);
          }
        },
        "html");
      jQuery('#previewPane').fadeIn(1000);
      jQuery('#editedText').focus();
    };
  })
</script>