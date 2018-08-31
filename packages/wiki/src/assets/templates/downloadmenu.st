<button class="item button--download">
  <i class="download icon"></i>
  Download $wikititle$
</button>

<script>
  jQuery(document).ready(() =>
    jQuery(".button--download").click(() => jQuery(".section--download").slideToggle())
  )
</script>

<style>
  .button--download {
    cursor: pointer;
  }
</style>