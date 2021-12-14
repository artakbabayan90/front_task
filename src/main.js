import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import {Layout, Typography, Row, Col ,Menu, Select, Radio, Popover, Card} from "ant-design-vue";


const app = createApp(App);
app.use(Layout).use(Typography).use(Row).use(Col).use(Menu).use(Select).use(Radio).use(Popover).use(Card).mount('#app')
