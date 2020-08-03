const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
          currentAlert.remove();
        }
      };
      const showAlert = (massage, className) => {
        clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(massage));
        const mainSection = document.querySelector('.general-section');
        const board = document.querySelector('.display-board');
        mainSection.insertBefore(div, board);
        setTimeout(() => {
          clearAlert();
        }, 2000);
      };
