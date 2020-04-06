let topics, paras;

let init = function(){
  topics = document.querySelectorAll(".topic");
  [].forEach.call(topics, (topic)=>{
    topic.addEventListener('click', switchTab);
  });
  paras = document.querySelectorAll('.para-content');
}

let switchTab = function(ev){
  let topic = ev.target;
  let id = topic.id;
  let actives = document.querySelectorAll('.active');
  console.log(actives);
  [].forEach.call(actives, (active)=>{
    active.classList.remove('active');
  });
  [].forEach.call(paras, (para)=>{
    if('para-'+id === para.id){
      topic.classList.add('active');
      para.classList.add('active')
    }
  })
}
window.addEventListener('DOMContentLoaded', init);
