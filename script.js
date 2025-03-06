document.getElementById("send-button").addEventListener("click", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let statusElement = document.getElementById("status");
    let webhookURL = "https://discord.com/api/webhooks/1340329376700436520/iOYIyc-XF0CvTD3wpfWzIAFCs8WEQ2fpWH5JdVl0dqUPcHRwI8dzrZUGE9eJuI5qSy99"; 

    if (!name || !email || !message) {
        statusElement.innerText = "❌ Todos os campos são obrigatórios!";
        statusElement.style.color = "red";
        return;
    }

    let payload = {
        content: `📩 **Nova mensagem de contato** 📩\n\n👤 **Nome:** ${name}\n📧 **E-mail:** ${email}\n📝 **Mensagem:** ${message}`
    };

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            statusElement.innerText = "✅ Mensagem enviada com sucesso!";
            statusElement.style.color = "green";
            document.getElementById("contact-form").reset();
        } else {
            statusElement.innerText = "❌ Erro ao enviar mensagem.";
            statusElement.style.color = "red";
        }
    })
    .catch(error => {
        statusElement.innerText = "❌ Erro ao conectar com o Discord.";
        statusElement.style.color = "red";
    });
});


document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, 
                behavior: "smooth"
            });
        }
    });
});