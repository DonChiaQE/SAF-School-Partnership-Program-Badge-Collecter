<template>
<TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <iframe name="hidden_iframe" id="hidden_iframe" style="display: none" onload="if(this.submitted)  {window.location='';}"></iframe>
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                        <form v-on:submit="submitName" target="hidden_iframe" action="https://docs.google.com/forms/d/e/1FAIpQLScgN4MDSP7kFRvQHI9OIWroKYjtoPB8Js3LCpu9K8ZgHv95mA/formResponse">
                            <div>
                                <div class="mt-3 text-left sm:mt-5">
                                    <DialogTitle as="h3" class="text-2xl font-semibold leading-6 text-gray-900">Details</DialogTitle>
                                    <!-- <div class="mt-3">
                                        <p class="text-xs text-gray-500">This data will be used promotional purposes.</p>
                                    </div> -->
                                    <div class="mt-4">
                                        <input name="entry.1045313476" v-model="name" type="text" placeholder="John Doe" class="block w-full rounded-md border-0 py-2.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" required="true" />
                                    </div>
                                    <div class="mt-2">
                                        <input name="entry.203316325" v-model="email" type="email" placeholder="johndoe@aol.com" class="block w-full rounded-md border-0 py-2.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" required="true" />
                                    </div>
                                </div>
                                <p class="text-xs mt-3 text-gray-500">By participating, you agree to have SAF promotional emails sent to you.</p>
                            </div>
                            <div class="mt-5 sm:mt-6">
                                <button type="submit" :disabled="name === '' || email === ''" class="inline-flex w-full justify-center rounded-md disabled:opacity-30 disabled:hover:bg-blue-600 bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </div>
    </Dialog>
</TransitionRoot>
</template>

<script setup>
import {
    ref
} from 'vue'
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot
} from '@headlessui/vue'
import {
    useNameStore
} from '../store/name';

const name = ref('')
const email = ref('')
const open = ref(true)
const nameStore = useNameStore()

function submitName() {
    setTimeout(() => {
        nameStore.setName(name.value)
        open.value = false
    }, 1000)
}
</script>
