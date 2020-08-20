import "regenerator-runtime";
import "./styles/style.css";
import "./script/component/app-bar.js"; // agar kode pada berkas app-bar.js tereksekusi
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);
