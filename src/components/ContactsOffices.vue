<template>
    <div class="offices">
        <div class="row">
            <div class="col col--6">
                <div class="offices-content">
                    <div class="title title--section title--white">Our Offices</div>
                    <div class="office-cities">
                        <div class="office-cities__name" v-for="location in locations" :key="location.id"
                             :class="{ 'is-active': currentLocationId === location.id }"
                             @click="changeLocation(location.id)"
                        >
                            {{ location.city }}
                        </div>
                    </div>
                    <div class="office-company">{{ selectedLocation.company }}</div>
                    <ul class="office-address">
                        <li>{{ selectedLocation.formatted_address }}</li>
                        <li>{{ selectedLocation.zip_code }}</li>
                        <li>{{ selectedLocation.country }}</li>
                    </ul>
                </div>
            </div>
            <div class="col col--6">
                <GMap :location="selectedLocation.location"></GMap>
            </div>
        </div>
    </div>
</template>

<script>
	import locations from '@/api/contacts';
	import GMap from "./GMap";

	export default {
		name: "ContactsOffices",
		components: {
			GMap
		},
		data: () => ({
			locations: locations,
			currentLocationId: locations[0].id
		}),
		computed: {
			selectedLocation () {
				return this.locations.filter(location => location.id === this.currentLocationId)[0];
			}
		},
		methods: {
			changeLocation (id) {
				this.currentLocationId = id;
			}
		}
	};
</script>

<style scoped lang="scss">
    .offices {
        background-color: $theme-color-3;
        margin-bottom: 1px;
    }

    .offices-content {
        padding: em(130) em(30) em(100) em(15);
        max-width: 840px;
        margin-left: auto;
        @include media($screen-def) {
            padding-top: em(150);
        }
    }

    .office-cities {
        margin-bottom: em(35);
        @include media($screen-def) {
            margin-bottom: em(42);
        }

        &__name {
            cursor: pointer;
            color: $white;
            display: inline-block;
            vertical-align: top;
            text-transform: uppercase;
            font-size: em(22);
            line-height: 1;
            margin-right: rem(25);
            transition: color 0.2s ease;
            margin-bottom: rem(10);

            &:hover,
            &.is-active {
                color: $theme-color-1;
            }
        }
    }

    .office-company {
        color: $white;
        line-height: 1;
        font-size: em(42);
        margin-bottom: rem(35);
        @include media($screen-def) {
            font-size: em(48);
            margin-bottom: rem(44);
        }
    }

    .office-address {
        color: $white;
        font-size: em(22);
        list-style: none;
        padding: 0;
        margin: 0;

        li + li {
            margin-top: rem(18);
        }
    }
</style>
