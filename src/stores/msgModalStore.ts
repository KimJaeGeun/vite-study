import { defineStore } from 'pinia';

const msgModalStore = defineStore({
    id: 'msgModalStore',
    state: () => ({
        isOn: false,
        msg: '',
    }),
    actions: {
        setMessage (isOn: boolean, msg: string) {
            [this.isOn, this.msg] = [isOn, msg];
        }
    }
});

export default msgModalStore;
