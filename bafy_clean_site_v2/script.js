
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    if(a.getAttribute('href').startsWith('#')){
      e.preventDefault();
      document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    }
  });
});
function handleForm(id){
  const form=document.getElementById(id);
  if(!form) return;
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const btn=form.querySelector('button');
    btn.disabled=true; btn.textContent='Заявка отправлена ✓';
  });
}
['lead-form','lead-form-services','lead-form-contacts'].forEach(handleForm);
