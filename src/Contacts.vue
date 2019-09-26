<template>
    <div id="app" class="page">
        <Header/>
        <div class="main" role="main">
            <ContactsInfo/>
            <ContactsOffices/>
            <ContactsUs/>
        </div>
    </div>
</template>

<script>
	import Header from '@/components/Header';
	import ContactsInfo from '@/components/ContactsInfo';
	import ContactsOffices from '@/components/ContactsOffices';
	import ContactsUs from '@/components/ContactsUs';

	export default {
		name: 'Contacts',
		components: {
			Header,
			ContactsInfo,
			ContactsOffices,
			ContactsUs
		}
	}
</script>

<style lang="scss">
    @import 'scss/vendors';
    @import 'scss/styles';
</style>
