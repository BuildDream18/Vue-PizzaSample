import Step1 from './components/step1.vue'
import Step2 from './components/step2.vue'
import Step3 from './components/step3.vue'
import Summary from './components/summary.vue'

export const routes = [
    { 
        path : '/', 
        redirect: '/step1'
    },
    { path : '/step1', name: 'step1', component: Step1 },
    { path : '/step2', name: 'step2', component: Step2 },
    { path : '/step3', name: 'step3', component: Step3 },
    { path : '/summary', name: 'summary', component: Summary },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: Step1 },
    // if you omit the last `*`, the `/` character in params will be encoded when resolving or pushing
    { path: '/:pathMatch(.*)', name: 'bad-not-found', component: Step1 },
]