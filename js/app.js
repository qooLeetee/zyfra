document.addEventListener('DOMContentLoaded', ()=>{
  if(document.querySelector('section.filters')) {
    const filtersBlock = document.querySelector('section.filters');
    const filtersItems = filtersBlock.querySelectorAll('.filter-item');
    const filtersName = filtersBlock.querySelectorAll('[name="productName"]');
    const filtersType = filtersBlock.querySelectorAll('[name="porductType"]');
    const filtersInputs = filtersBlock.querySelectorAll('.filter-select__label');
    const filterMobBtn = filtersBlock.querySelector('.filters-select-button');
    const filterMobBlock = filtersBlock.querySelector('.filters-select')
    let filterNameActive = '', filterTypeActive = '';
    for(let i = 0; filtersName.length > i; i++) {
      filtersName[i].onclick = ()=>{
        if(filtersName[i].checked) {
          filterNameActive = filterNameActive+filtersName[i].value;
        } else {
          filterNameActive = filterNameActive.replace(filtersName[i].value, '')
        }
      }
    }
    for(let i = 0; filtersType.length > i; i++) {
      filtersType[i].onclick = ()=>{
        if(filtersType[i].checked) {
          filterTypeActive = filterTypeActive + filtersType[i].value;
        } else {
          filterTypeActive = filterTypeActive.replace(filtersType[i].value, '')
        }
      }
    }
    for(let i = 0; filtersInputs.length > i; i++) {
      filtersInputs[i].onclick = ()=>{
        if(filterNameActive != '' && filterTypeActive != '') {
          for(let j = 0; filtersItems.length > j; j++) {
            if(filterNameActive.includes(filtersItems[j].getAttribute('data-name')) && filterTypeActive.includes(filtersItems[j].getAttribute('data-type'))) {
              filtersItems[j].classList.add('active')
            } else {
              filtersItems[j].classList.remove('active')
            }
          }
        } else if(filterNameActive == '' && filterTypeActive != '') {
          for(let j = 0; filtersItems.length > j; j++) {
            if(filterTypeActive.includes(filtersItems[j].getAttribute('data-type'))) {
              filtersItems[j].classList.add('active')
            } else {
              filtersItems[j].classList.remove('active')
            }
          }
        } else if(filterNameActive != '' && filterTypeActive == '') {
          for(let j = 0; filtersItems.length > j; j++) {
            if(filterNameActive.includes(filtersItems[j].getAttribute('data-name'))) {
              filtersItems[j].classList.add('active')
            } else {
              filtersItems[j].classList.remove('active')
            }
          }
        } else {
          for(let j = 0; filtersItems.length > j; j++) {
              filtersItems[j].classList.add('active')
          }

        }
      }
    }

    for(let i = 0; filtersItems.length > i; i++) {
      if(filtersItems[i].getAttribute('data-type') === 'Сертификация') {
        filtersItems[i].classList.add('pluss_rub_item')
      }
    }

    filterMobBtn.onclick = ()=>{
      filterMobBlock.classList.toggle('active')
    }
  }

  if(window.innerWidth < 1024) {
    const menuBtn = document.querySelector('.header__buttons__select-training-mob');

    if(menuBtn) {
      const menuBlock = document.querySelector('.header_menu')
      const menuItems = document.querySelectorAll('.header__nav__item')
      menuBtn.onclick =()=>{
        menuBlock.classList.toggle('active')
        menuBtn.classList.toggle('close')
        menuBtn.classList.toggle('open')
      }
      for(let i = 0; menuItems.length > i; i++){
        menuItems[i].onclick = ()=> {
          menuBlock.classList.toggle('active')
          menuBtn.classList.toggle('close')
          menuBtn.classList.toggle('open')

        }
      }
    }
  }

  
})