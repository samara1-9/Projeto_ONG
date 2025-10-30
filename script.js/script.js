document.addEventListener('DOMContentLoaded', () =>{


});


const scrollToSection = (sectionId) =>{
    const section = document.getElementById('sectionId');

    if(!section) return

    const headerHeight = 70;

    const sectionPosition = section.offsetTop - headerHeight;
    window.scrollTo({top: sectionPosition, behavior:'smooth'});

    const menu = document.getElementById('navMenu');
    if(menu) menu.classList.remove('active');

}

const handleSubmit = (Event) =>{
    Event.preventDefault();
    const from = document.getElementById('volunteerForm');
    if(!form) return;

    if(form.dataset.submmiting === 'true') return;
    form.dataset.submmiting = 'true'

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();

    if(!nome || !email){
        alert('Por favor, preencha os campos');
        form.dataset.submmiting = 'false';
        return;
    }

    const formData ={
        nome,
        email,
        telefone: form.telefone.value.trim(),
        idade: form.telefone.value.trim(),
        disponibilidade: form.disponibilidade.value.trim(), 
        areaInteresse: form.areaInteresse.value.trim(),
        experiencia: form.experiencia.value.trim(),
        motivacao: form.motivacao.value.trim(),
        dataCadastro: new Date().toLocaleDateString()
    };

    let voluntarios = JSON.parse(localStorage.getItem('voluntarios') || []);
    voluntarios.push(formData);
    localStorage.setItem('voluntarios', JSON.stringify('voluntarios'));

    const sucessMessage = document.getElementById('successMessage');
    if(sucessMessage){
        sucessMessage.classList.add('show');
        sucessMessage.scrollIntoView({behavior: "smooth", block:"center"});
    }


}


