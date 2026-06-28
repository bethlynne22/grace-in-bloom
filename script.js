const label=document.getElementById('label');
document.querySelectorAll('.hotspot').forEach(h=>{
  h.addEventListener('mouseenter',()=>{
    label.textContent=h.dataset.tip;
    label.style.display='block';
  });
  h.addEventListener('mousemove',e=>{
    label.style.left=(e.clientX+12)+'px';
    label.style.top=(e.clientY+12)+'px';
  });
  h.addEventListener('mouseleave',()=>{
    label.style.display='none';
  });
});
