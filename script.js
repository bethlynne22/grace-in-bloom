
const label=document.getElementById('label');
document.querySelectorAll('.hotspot').forEach(h=>{
  h.addEventListener('mouseenter',()=>{label.textContent=h.dataset.tip;label.style.display='block';});
  h.addEventListener('mousemove',e=>{label.style.left=(e.clientX+12)+'px';label.style.top=(e.clientY+12)+'px';});
  h.addEventListener('mouseleave',()=>{label.style.display='none';});
});

function saveNote(id){
  const el=document.getElementById(id);
  localStorage.setItem("grace-"+id, el.value);
  alert("Saved in this browser.");
}
function loadNote(id){
  const el=document.getElementById(id);
  if(el) el.value=localStorage.getItem("grace-"+id)||"";
}
document.addEventListener("DOMContentLoaded",()=>{
  ["prayerNote","journalNote","creativeNote"].forEach(loadNote);
});
