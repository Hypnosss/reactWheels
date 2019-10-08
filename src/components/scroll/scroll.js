import React, { Component } from 'react';
import "./scroll.css"

class scroll extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.state = {
      pressing: false
    }
  }

  handleScroll(e) {
    // console.log("!")
    let div = document.getElementsByClassName("scrollDemo1")[0];
    let scrollBtn = document.getElementsByClassName("scrollBtn")[0];
    let frame = 6;
    let i = 0;
    let scrollLength = 100;
    let oldScrollTop = div.scrollTop;

    // console.log(1)

    function animationStepDown() {
      i++;
      // console.log(i)
      scrollBtn.style.top = div.scrollTop / (div.scrollHeight - div.offsetHeight) * (div.offsetHeight - scrollBtn.offsetHeight) + "px";
      if(i <= frame / 2) {
        div.scrollTop = oldScrollTop + 2 * scrollLength / frame / frame * Math.pow(i, 2); 
      } else {
        div.scrollTop = oldScrollTop - 2 * scrollLength / frame / frame * Math.pow(i - frame, 2) + scrollLength; 
      }
      if(i < frame) {
        window.requestAnimationFrame(animationStepDown);
      }
    }

    function animationStepUp() {
      i++;
      scrollBtn.style.top = div.scrollTop / (div.scrollHeight - div.offsetHeight) * (div.offsetHeight - scrollBtn.offsetHeight) + "px";
      if(i <= frame / 2) {
        div.scrollTop = oldScrollTop - 2 * scrollLength / frame / frame * Math.pow(i, 2); 
      } else {
        div.scrollTop = oldScrollTop + 2 * scrollLength / frame / frame * Math.pow(i - frame, 2) - scrollLength; 
      }
      if(i < frame) {
        window.requestAnimationFrame(animationStepUp);
      }
    }

    if(e.deltaY > 0) { //向下滚
      window.requestAnimationFrame(animationStepDown);
    } else {
      window.requestAnimationFrame(animationStepUp);
    }
    
  }

  handleMouseDown(e) {
    let scrollBtn = document.getElementsByClassName("scrollBtn")[0];
    
    if(!scrollBtn.style.top) {
      scrollBtn.style.top = "0px";
    } 

    // console.log(scrollBtn.style.top.slice(0, -2) - 0);
    if(e.path[0] === scrollBtn) {
      this.setState({
        pressing: true,
        oldOffsetY: e.offsetY,
        oldBtnTop: scrollBtn.style.top.slice(0, -2) - 0,
      });
    }
  }

  handleMouseMove(e) {
    // e.preventDefault();
    let scrollDemo1 = document.getElementsByClassName("scrollDemo1")[0];
    let scrollBtn = document.getElementsByClassName("scrollBtn")[0];
    let div = document.getElementsByClassName("scrollDemo1")[0];

    let pressing = this.state.pressing;
    let oldOffsetY = this.state.oldOffsetY;
    let oldBtnTop = this.state.oldBtnTop;

    // console.log(oldBtnTop)

    if(pressing) {
      
      if(e.path.indexOf(scrollDemo1) !== -1) {//in scrollDemo1 
        console.log(e.path)
        
        let newBtnTop = oldBtnTop + e.offsetY - oldOffsetY;
        console.log(oldBtnTop, e.offsetY, oldOffsetY)
        // console.log(newBtnTop, div.offsetHeight - scrollBtn.offsetHeight, 0);
        scrollBtn.style.top = [0, div.offsetHeight - scrollBtn.offsetHeight, newBtnTop].sort((a,b) => a - b)[1] + "px";
      }
      // console.log(e, e.offsetY);
    }
  }

  handleMouseUp() {
    this.setState({
      pressing: false
    });
  }

  componentDidMount() {
    document.addEventListener("wheel", this.handleScroll);
    document.addEventListener("mousedown", this.handleMouseDown);
    document.addEventListener("mousemove", this.handleMouseMove);
    document.addEventListener("mouseup", this.handleMouseUp);
  }

  componentWillUnmount() {
    document.removeEventListener("wheel", this.handleScroll);
    document.removeEventListener("mousedown", this.handleMouseDown);
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("mouseup", this.handleMouseUp);
  }

  render() { 
    return (
      <div className="scroll">
        <h3>scroll</h3>
        <div className="scrollDemo1">
        <div className="scrollBar">
          <div className="scrollBtn"></div>
        </div>
        <div className="scrollThing">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam asperiores qui magnam sunt molestias quos cupiditate sed in architecto iusto, obcaecati inventore est ipsum fuga modi! Eius delectus sit similique ipsam tenetur velit nihil consequuntur cupiditate placeat voluptatem laudantium iusto, magnam facilis necessitatibus vel hic aliquam tempora consectetur. Perspiciatis nisi et necessitatibus similique ullam distinctio eos! Voluptatem impedit odit, iste blanditiis iusto aliquam maiores porro assumenda delectus qui! Aspernatur, debitis? Molestias fugiat totam fuga natus nisi harum illum veritatis officia dolor laborum tempore, eos laboriosam dolore quibusdam consectetur ipsa doloribus ratione quidem quia libero! Debitis dolore unde libero! Quam modi consequatur id sed, nesciunt, corporis non tempore incidunt eos quisquam voluptates sapiente expedita! Odio atque odit possimus officiis cum! Sit repellendus sunt voluptatum, commodi recusandae soluta cupiditate fugit nisi quidem provident impedit nobis itaque cum fugiat accusantium possimus. Saepe sit natus sed esse asperiores quod odio minus obcaecati ipsum sint eius error dolor recusandae iste expedita, eaque, nihil minima? Repellendus soluta deleniti voluptatem tenetur nulla reiciendis delectus, tempore iusto doloremque quia, fuga corrupti amet iure. Facilis nobis atque sed porro nemo voluptas sapiente, ducimus excepturi eum ipsa eius facere reprehenderit minima nesciunt voluptatibus placeat quod quibusdam culpa quas cupiditate neque odit! Rerum quae explicabo eum vero temporibus similique sint nemo ipsam magnam veniam, provident corrupti enim unde asperiores sequi deleniti eveniet, expedita sit. Tempore temporibus ab minima beatae nulla vero numquam ex, officia deleniti facilis architecto totam nostrum. Error dignissimos sapiente totam facere consectetur necessitatibus eveniet quos repudiandae et inventore deleniti quae ut, iste veritatis voluptate nobis, voluptates ipsam explicabo laborum ea fuga sed numquam itaque? Nemo similique porro incidunt, voluptatibus id, saepe dolore quo nobis vero sapiente cumque, aut eos? Natus, reprehenderit! Earum a doloremque quo, velit odit explicabo perferendis, et repellendus vero laborum nulla illo nostrum. Adipisci, id. Cum odio aspernatur optio delectus tempore natus, eveniet totam et adipisci fugiat officia nostrum assumenda quos? Quos atque repellat commodi voluptatum beatae nulla aspernatur at aliquam repellendus eius. Ut est harum beatae ab, consectetur, placeat molestias ad quisquam assumenda quia atque, eveniet impedit eligendi quas nihil sapiente. Illo consequuntur eligendi, nisi debitis sit alias quod. Delectus laborum culpa cupiditate dolore laudantium, tempora molestiae nesciunt sunt pariatur blanditiis deserunt nulla ab dolorum numquam natus, explicabo ipsum soluta sint nobis consequuntur praesentium nihil laboriosam accusantium! Commodi voluptatem aspernatur magni excepturi facere! Incidunt minima ullam fuga asperiores. Nostrum numquam praesentium pariatur mollitia enim et ipsam perferendis molestias, unde est illo esse fugit modi quas rem provident, magnam quibusdam, incidunt odit beatae vel nisi dolorem impedit illum. Sint necessitatibus placeat ut eaque, distinctio quas aut reiciendis ducimus debitis, sequi eius fuga fugiat doloremque similique suscipit? Nemo totam, harum velit cupiditate iure voluptas corrupti porro ducimus. Iusto natus facere quam distinctio illum tenetur ex. Exercitationem quod, non, nulla quam, placeat tempore suscipit iure aut est culpa beatae architecto perferendis dignissimos voluptatem tenetur enim neque at. Similique hic sequi quaerat fugiat voluptatem suscipit consequatur, praesentium iure animi? Voluptatibus doloremque sapiente, exercitationem at recusandae excepturi debitis corporis minima porro ex eaque consectetur iste sed earum rem repudiandae atque dignissimos sunt eos. Odio quia omnis excepturi aut vero incidunt quo consectetur ipsum nesciunt? Incidunt, adipisci? Numquam, ipsum veniam? Itaque ipsum pariatur aut soluta provident blanditiis maxime cupiditate minima illo at, dolor ratione voluptates, temporibus beatae iusto laborum! Quos cupiditate inventore reprehenderit natus cumque consectetur laboriosam esse sed vel earum fugit dignissimos est dicta eos quo incidunt sint perferendis facere maxime ipsa maiores, laborum ducimus. Vero maxime deserunt vel tempora delectus rem iusto maiores nulla earum quis. Earum corporis, velit odio recusandae deleniti asperiores voluptatibus quae autem aspernatur quasi commodi praesentium minima magni inventore, assumenda labore perspiciatis. Placeat quis inventore incidunt obcaecati commodi debitis repellat perferendis ab sint officia fugiat totam voluptate consequatur voluptates quod aliquid illum, ullam modi adipisci ipsa voluptatem eligendi voluptatibus suscipit! Alias maiores sapiente officiis labore itaque, veritatis magni sit magnam non praesentium, voluptatibus soluta, sunt doloremque quibusdam quod minima incidunt quos. Optio, quas pariatur id quidem sequi quaerat quis ipsam officiis accusamus rem expedita quasi praesentium ex at suscipit. Quisquam non nisi laboriosam eaque natus. Totam provident necessitatibus, porro voluptatibus facilis reiciendis ad, sed adipisci similique perferendis ab iusto deserunt facere voluptatem numquam libero eligendi tempora, autem earum illum a! Modi, quaerat voluptate. Quisquam, reiciendis et? Odit, velit tempore molestiae maiores perspiciatis earum libero iure esse quas ullam! Tempora, libero nam dicta, sapiente nisi eius doloremque, omnis unde id aperiam accusamus error repellendus laboriosam? Earum eum minima voluptatibus praesentium, aliquam perspiciatis iure optio esse rem quidem suscipit consequatur nulla in pariatur nobis molestias magni reprehenderit quibusdam. Blanditiis repellat consectetur facilis consequatur dolorem nam soluta rem explicabo officiis! Nostrum quia, tempora amet, consectetur similique, quidem iste fuga quisquam laudantium at non? Quia sint hic ratione quos tempora asperiores doloremque ut dolore voluptatem repudiandae placeat, delectus quod culpa blanditiis eveniet! Sunt dolore alias cum temporibus quam, modi pariatur architecto id eaque reiciendis doloribus laboriosam optio obcaecati veniam fugit inventore vero fuga! Repellendus ipsum eum enim ipsam consequuntur, atque beatae exercitationem? Tempora, ad unde eum quibusdam, voluptatibus minus asperiores cumque consectetur sequi laboriosam explicabo architecto hic quisquam vitae accusamus accusantium esse officia. Dignissimos deleniti eum placeat officia totam adipisci modi iure sint architecto nihil quas blanditiis nulla molestias laborum rem, reiciendis quae incidunt officiis dolores consequuntur quam quos, accusamus maiores odit. Maiores corrupti sint nobis tenetur reprehenderit! Doloremque laboriosam modi laborum, in accusamus hic esse reprehenderit debitis totam quasi et quaerat adipisci asperiores error non eaque, odit id ipsa dignissimos sit dolorem ea voluptatem ratione? Repudiandae eveniet, non voluptatum nobis debitis repellendus commodi recusandae, eos delectus voluptates, reiciendis sequi beatae quaerat vero. Odit, animi? Perspiciatis assumenda quos fugiat animi temporibus non qui odio, possimus ab amet ducimus enim ipsa in laborum sequi, numquam minima deleniti doloremque eaque. Eum ullam tenetur vitae enim debitis unde nostrum illo quibusdam odit iusto. Dolorum vel at ratione fugit perspiciatis eum id labore in laboriosam voluptatum. Error necessitatibus quisquam vero modi obcaecati a fuga neque eius quas voluptas alias, dignissimos aut consectetur.
        </div>
        </div>
      </div>
    );
  }
}
 
export default scroll;