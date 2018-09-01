<a class="item button--download" href="#data">
  <i class="download icon"></i>
  Download $wikititle$
</a>

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