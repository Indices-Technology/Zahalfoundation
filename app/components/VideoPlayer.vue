<template>
  <ClientOnly>
    <div class="video-player">
      <!-- Self-hosted file -->
      <video
        v-if="kind === 'file'"
        ref="target"
        controls
        playsinline
        :poster="poster"
      >
        <source :src="src" />
      </video>
      <!-- YouTube / Vimeo embed -->
      <div
        v-else
        ref="target"
        :data-plyr-provider="kind"
        :data-plyr-embed-id="embedId"
      ></div>
    </div>
    <template #fallback>
      <div class="video-player video-player--placeholder">
        <img v-if="poster" :src="poster" alt="" />
      </div>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import Plyr from "plyr"

const props = withDefaults(
  defineProps<{
    /** YouTube/Vimeo URL, or a path/URL to an .mp4 file */
    src: string
    /** Optional poster image shown before play */
    poster?: string
  }>(),
  { poster: "" },
)

function parse(url: string): { kind: "youtube" | "vimeo" | "file"; embedId: string } {
  const yt = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/))([\w-]{11})/,
  )
  if (yt) return { kind: "youtube", embedId: yt[1]! }
  const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vm) return { kind: "vimeo", embedId: vm[1]! }
  return { kind: "file", embedId: "" }
}

const { kind, embedId } = parse(props.src)

const target = ref<HTMLElement | null>(null)
let player: Plyr | null = null

onMounted(() => {
  if (target.value) {
    player = new Plyr(target.value, {
      ratio: "16:9",
      youtube: { noCookie: true, rel: 0, modestbranding: 1 },
    })
  }
})

onBeforeUnmount(() => {
  player?.destroy()
  player = null
})
</script>

<style scoped>
.video-player {
  --plyr-color-main: var(--zahal-primary);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(var(--zahal-black-rgb), 0.18);
}
.video-player--placeholder {
  position: relative;
  aspect-ratio: 16 / 9;
  background: #000;
}
.video-player--placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
}
.video-player :deep(video) {
  display: block;
  width: 100%;
}
</style>
