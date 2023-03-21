<script lang="ts">
  import github from '$lib/images/github.svg';
  import svelte from '$lib/images/svelte-logo.svg';

  const link = 'https://github.com/wachuuu/how-much-gold';
</script>

<div class="not-prose flex align-center justify-center text-sm opacity-50">
  Created with 
  <img class="mx-1" src="{svelte}" width="16px" alt="svelte-logo">
  (and love) by primacode.io. 
  <a class="flex align-center mx-1 underline" href="{link}">
    <img class="mr-1" src="{github}" width="16px" alt="github-logo">
    Leave a star!
  </a>
</div>
