import { mapGetters, mapActions } from 'vuex'

export const menuSetting = {
    computed: {
        ...mapGetters([
            'active',
            'menuItemActive'
        ]),
    },
    methods: {
        ...mapActions([
            'setActive',
            'setMenuItemActive'
        ])
    }
}