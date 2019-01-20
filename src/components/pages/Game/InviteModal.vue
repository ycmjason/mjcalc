<template functional>
  <mj-modal>
    <button slot="trigger">
      <mj-icon>link</mj-icon> Invite
    </button>
    <div class="inviteYourFriend">
      <h2>Invite your friend</h2>
      <p>Anyone with the link can <b>view</b> and <b>edit</b> the game.</p>
      <mj-copy-text :text="props.gameLink" />
    </div>
  </mj-modal>
</template>K
