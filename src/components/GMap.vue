<template>
    <GmapMap :center="location" :zoom="10" :options="{ styles: mapStyles }">
        <GmapMarker :position="location" :icon="{ url: require('@/assets/marker.svg')}"/>
    </GmapMap>
</template>

<script>
	import {styles} from "@/constants/map";

	export default {
		name: "GMap",
		props: {
			location: {
				type: Object,
				default: null
			}
		},
		data: () => ({
			mapStyles: styles
		})
	};
</script>

<style scoped lang="scss">
    .vue-map-container {
        height: rem(450);
        width: 100%;
        @include media($screen-md) {
            height: rem(650);
        }
        @include media($screen-def) {
            height: rem(753);
        }
    }
</style>
