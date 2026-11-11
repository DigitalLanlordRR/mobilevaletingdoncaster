
(() => {
 const menu=document.querySelector('.menu');
 const nav=document.querySelector('.nav');
 if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});}
 const year=document.querySelector('[data-year]'); if(year)year.textContent=new Date().getFullYear();
 document.querySelectorAll('[data-lead-form]').forEach(form=>form.addEventListener('submit',event=>{
   event.preventDefault();
   const values=new FormData(form);
   const subject=encodeURIComponent('Mobile Valeting Doncaster enquiry');
   const body=encodeURIComponent(['Name: '+values.get('name'),'Email: '+values.get('email'),'Telephone: '+values.get('telephone'),'Postcode: '+values.get('postcode'),'Vehicle: '+values.get('vehicle'),'Service: '+values.get('service'),'Message: '+values.get('message')].join('\n'));
   const status=form.querySelector('[data-status]');
   if(status)status.textContent='Your email application should open with your enquiry. Please send it to complete your request.';
   window.location.href='mailto:SET-ENQUIRIES-EMAIL-HERE?subject='+subject+'&body='+body;
 }));
})();
