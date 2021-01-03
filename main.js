jQuery(function($){
    //現在の表示
    let status = "opening";
    //タイトルBGM設定
    let audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
    audio.loop = true;
    //音量を設定
    let bmgVol =0.2;
    audio.volume = bmgVol;

    //戦闘速度の設定
    let bt = 4;
    
    
    //タイトルボタンを押す
    $("#start").on("click", function(){
        //alert("first");
        audio.play();
        $(".outside").css("background-color", "#EEEEEE");
        $("#start").css("display", "none");
        $("img").attr("src", "./gif/map.gif");
        $(".downer-box-text").html("≪ゲームの説明≫<br>自分の能力を自分で決め<br>死んで覚えて、次に活かし。戦いに勝利せよ");
        $("<button class='skip'>next</button>").appendTo(".center-box");
        opMovie();
        
    });

    //戦闘速度の変更
    $("#two").on("click", function(){
        bt = 2;
    });
    $("#three").on("click", function(){
        bt = 3;
    });
    $("#five").on("click", function(){
        bt = 5;
    });

    //オープニングムービー
    function opMovie(){
         //ムービースキップ
        
        $(".skip").on("click",function(){
           // alert("skip");
            $(".skip").remove();
            $(".upper-box-text").text("");
            $(".downer-box-text").text("");
            $("img").attr("src", "");
            stageSelect();

        });
    }

   //ステージセレクト
   function stageSelect(){
        $("<button class='stage' id='tutorial'>チュートリアル</button>").appendTo("#buttonSelect");
        $("<button class='stage' id='stage1'>stage1</button>").appendTo("#buttonSelect");
        $("<button class='stage' id='stage2'>stage2</button>").appendTo("#buttonSelect");
       // $("<br>").appendTo("#buttonSelect");
        $("<button class='stage' id='stage3'>stage3</button>").appendTo("#buttonSelect");
        $("<button class='stage' id='stage4'>stage4</button>").appendTo("#buttonSelect");
        $("<button class='stage' id='stage5'>stage5</button>").appendTo("#buttonSelect");
        
        $(".stage").on("click",function(){

            let buttonPush = this.id;
            //alert(buttonPush);

            stage(buttonPush);

        });
   }

    $("#lit").on("click", function(){
        bmgVol = 0.2;
        audio.volume = bmgVol;
    });
    $("#mid").on("click", function(){
        bmgVol = 0.6;
        audio.volume = bmgVol;
    });
    $("#mute").on("click", function(){
        bmgVol = 0;
        audio.volume = bmgVol;
    });

    function stage(num){
       // alert(num);
       $(".stage").remove();
        switch(num){
            case "tutorial":
                tutorial();
            break;
            case "stage1":
                stage1();
            break;
            case "stage2":
                stage2();
            break
            case "stage3":
                stage3();
            break
            case "stage4":
                stage4();
            break
            case "stage5":
                stage5();
            break
            default:
                alert("エラーです");
            break;
        }
    }

    //チュートリアルステージ
    function tutorial(){
     //   alert("tutorial");
     $(".upper-box-text").html("敵:かかしさん<br>体:50 攻:10 防:5");
    //敵画像の表示
    $("img").attr("src", "./gif/kakasi.gif");
     battle(200,"tutorial");
    }

    //ステージ1
    function stage1(){
      //  alert("stage1");
        $(".upper-box-text").html("敵:スライムLV50<br>体:40 攻:5 防:0");
        audio.pause();
        audio = new Audio("./bgm/bgm_maoudamashii_8bit25.mp3");
        audio.loop = true;
        audio.volume = bmgVol;
        audio.play();

        //敵画像の表示
        $("img").attr("src", "./gif/sra4.gif");

        //戦闘パラメータを与え、関数を実行する
        battle(100,"stage1");
    }

    function stage2(){
        //  alert("stage1");
          $(".upper-box-text").html("敵:古代遺跡の守護兵<br>体:60 攻:40 防:65");
          audio.pause();
          audio = new Audio("./bgm/bgm_maoudamashii_8bit19.mp3");
          audio.loop = true;
          audio.volume = bmgVol;
          audio.play();
  
          //敵画像の表示
          $("img").attr("src", "./gif/robo.gif");
  
          //戦闘パラメータを与え、関数を実行する
          battle(300,"stage2");
      }

    function stage3(){
        //  alert("stage1");
          $(".upper-box-text").html("敵:復活の天竜<br>体:5 攻:10 防:10");
          audio.pause();
          audio = new Audio("./bgm/bgm_maoudamashii_8bit18.mp3");
          audio.loop = true;
          audio.volume = bmgVol;
          audio.play();
  
          //敵画像の表示
          $("img").attr("src", "./gif/dra.gif");
  
          //戦闘パラメータを与え、関数を実行する
          battle(300,"stage3");
    }

    function stage4(){
            //  alert("stage1");
            alert("暗証番号3。エラーです、アジトの扉は開きません");
            alert("暗証番号4。正解です、アジトの暗証番号、よくわかったな！？");
              $(".upper-box-text").html("敵:殺人鬼<br>体:75 攻:30 防:15");
              audio.pause();
              audio = new Audio("./bgm/bgm_maoudamashii_8bit15.mp3");
              audio.loop = true;
              audio.volume = bmgVol;
              audio.play();
      
              //敵画像の表示
              $("img").attr("src", "./gif/twin2.gif");
      
              //戦闘パラメータを与え、関数を実行する
              battle(450,"stage4");
    }

    function stage5(){
        //  alert("stage1");
        alert("半端な気持ちで挑むなら、消すわよ");
          $(".upper-box-text").html("敵:水晶の魔女<br>体:666 攻:777 防:999");
          audio.pause();
          audio = new Audio("./bgm/bgm_maoudamashii_8bit04.mp3");
          audio.loop = true;
          audio.volume = bmgVol;
          audio.play();
  
          //敵画像の表示
          $("img").attr("src", "./gif/magic2.gif");
  
          //戦闘パラメータを与え、関数を実行する
          battle(300,"stage5");
}

    //戦闘パラメーター設定
    function battle(point,stage){
        //体力、攻撃値、防御値の初期化
        let battleStage = stage;
        let maxPoint = point-1;
        let hitPoint1 = 0;
        let hitPoint2 = 0;
        let hitPoint3 = 1;
        let attackPoint1 = 0;
        let attackPoint2 = 0;
        let attackPoint3 = 0;
        let diffencePoint1 = 0;
        let diffencePoint2 = 0;
        let diffencePoint3 = 0;
        let pointWay = 0;
        let pointDigit = 0;
        //let pointCount = 0;

        let text = `<p class="parameter">割り振れる値：${maxPoint} （Enterで決定です）
        <br><span>体力に振る</span>・攻撃に振る・防御に振る
        <br>体力:<span>${hitPoint1}</span>${hitPoint2}${hitPoint3} 攻撃:${attackPoint1}${attackPoint2}${attackPoint3} 防御:${diffencePoint1}${diffencePoint2}${diffencePoint3}</p>`;
        //ポイントの表示
        $(`${text}`).appendTo(".downer-box-text");

        //ポイントの割り振り
        $("body").keydown(function(event){
            let key = event.keyCode;
            switch(key){
                case 39:
                    if(pointWay === 2 && pointDigit === 2){
                        reText(pointWay,pointDigit);
                    }else if(pointDigit === 2){
                        pointDigit = 0;
                        pointWay++;
                        reText(pointWay,pointDigit);
                    }else{
                        pointDigit++;
                        reText(pointWay,pointDigit);
                    }
                    
                break; 
                case 37:
                    if(pointWay === 0 && pointDigit === 0){
                        reText(pointWay,pointDigit);
                    }else if(pointDigit === 0){
                        pointDigit = 2;
                        pointWay--;
                        reText(pointWay,pointDigit);
                    }else{
                        pointDigit--;
                        reText(pointWay,pointDigit);
                    }
                    
                break;
                case 38:
                    parameterSet(pointWay,pointDigit,"add");
                    reText(pointWay,pointDigit);
                break;
                case 40:
                    parameterSet(pointWay,pointDigit,"sub");
                    reText(pointWay,pointDigit);
                break;

                //エンターキーで設定終了
                case 13:
                    let hp = hitPoint1 * 100 + hitPoint2 * 10 + hitPoint3;
                    let ap = attackPoint1 * 100 + attackPoint2 * 10 + attackPoint3;
                    let dp = diffencePoint1 * 100 + diffencePoint2 * 10 + diffencePoint3;
                    
                    next(hp,ap,dp,maxPoint);

                break; 
                default:
                break;

            }
        });


        //エンター後の処理
        function next(hp,ap,dp,point){
            $("body").off();
            $(".downer-box-text").text("戦闘開始 （Enterで進行）");
            $("body").keydown(function(event){
                let key = event.keyCode;
                if(key === 13){
                    
                    $("body").off();
                    switch(battleStage){
                        case "stage1":
                            $(".downer-box-text").text("スライムLV５０が現れた");
                            stage1(hp,ap,dp,point);
                        break
                        case "tutorial":
                            $(".downer-box-text").text("かかしが現れた");
                            tutorial(hp,ap,dp,point);
                        break
                        case "stage2":
                            $(".downer-box-text").text("遺跡の守護者が現れた");
                            stage2(hp,ap,dp,point);
                        break
                        case "stage3":
                            $(".downer-box-text").text("天空竜が現れた");
                            stage3(hp,ap,dp,point);
                        break
                        case "stage4":
                            $(".downer-box-text").text("殺人鬼兄弟が現れた");
                            stage4(hp,ap,dp,point);
                        break
                        case "stage5":
                            $(".downer-box-text").text("99の水晶と共に、魔法使いが現れた");
                            stage5(hp,ap,dp,point);
                        break
                    }
                }
            });

            //skipボタン待ち
            function skip(){
                $("<button class='skip'>skip</button>").appendTo(".center-box");

                $(".skip").on("click",function(){
                    $(".skip").remove();
                    return
                });
            }

            //ステータス変化演出
            function status(hp,ap,dp,ehp,eap,edp){
                $(".upper-box-text").html(`自分 HP:${hp}攻:${ap}防:${dp}<br>敵 HP:${ehp}攻:${eap}防:${edp}`);
                return
            }
            //ダメージ演出
            function damage(ap,ehp,edp,damage,button){
                damage = ap - edp;
                if(damage > 0){
                    ehp -= damage;
                    if(ehp <= 0){
                        //次のボタン判定でクリアにする
                        button = 999;
                        ehp = 0;
                    }
                }else{
                    damage = 0;
                }
                return ap,ehp,edp,damage,button
            }
            //ゲームオーバ演出
            function gameover(){
                audio.pause();
                audio = new Audio("./bgm/bgm_maoudamashii_8bit20.mp3");
                audio.loop = true;
                audio.volume = bmgVol;
                audio.play();
                $(".downer-box-text").html("あなたは倒された…！！！");
                $(".upper-box-text").html("ＧＡＭＥＯＶＥＲ");
                $(".next").remove();
            }

            //ステージ5処理
            function stage5(hp,ap,dp,point){
                let button = 0;
                let ehp = 666;
                let eap = 777;
                let edp = 999;
                let damage = 0;
                let deffence = 0;
                let count = 0;
                let turn = 0;
                $("<button class='next'>next</button>").appendTo(".center-box");

                //魔女のスキル処理a
                function enemySkill5a(){
                    //余らせたPointを敵の全能力値に割り振る
                    ehp += point;
                    eap += point;
                    edp += point;


                 //   $(".downer-box-text").html(`Turn${turn}:天竜のスキル『強者復活』<br>プレイヤーの最も高い能力値を吸収し<br>天竜の最も低い能力値に加えた！`);
                    status(hp,ap,dp,ehp,eap,edp);
                }

                //魔女のスキル処理b
                function enemySkill5b(){
                    if(ehp >= 1000){
                        ehp -= 1000;
                    }
                    if(eap >= 1000){
                        eap -= 1000;
                    }
                    if(edp >= 1000){
                        edp -= 1000;
                    }
                 
                    status(hp,ap,dp,ehp,eap,edp);
                    if(ehp === 0){
                        button = 999;
                    }
                }

                //魔女のスキル処理c
                function enemySkill5c(){
                    eap = 13;
                 
                    status(hp,ap,dp,ehp,eap,edp);
                    
                }

                //スキルd処理
                function enemySkill5d(){
                    ehp += ap;
                 
                    status(hp,ap,dp,ehp,eap,edp);
                    if(ehp > 1000){
                        ehp -= 1000;
                        $(".downer-box-text").html(`Turn${turn}:増幅水晶で増加した体力が溢れ<br>同時に敵の体力が減少した！<br>増加した体力から1000を減らす`);
                        status(hp,ap,dp,ehp,eap,edp);
                    }else if(ehp === 1000){
                        $(".downer-box-text").html(`Turn${turn}:増幅水晶で増加した体力が溢れ<br>……1000となった<br>……敵は『自滅』した……！！！`);
                        ehp -= 1000;
                        status(hp,ap,dp,ehp,eap,edp);
                        audio.pause();
                        button = 999;
                    }
                }

                //敵からのダメージ演出
                function deffence5(){
                    deffence = eap - dp;
                    if(deffence > 0){
                        hp -= deffence;
                        if(hp <= 0){
                            button = 110;
                            hp = 0;
                        }
                    }else{
                        deffence = 0;
                    }
                    status(hp,ap,dp,ehp,eap,edp);
                    $(".downer-box-text").html(`Turn${turn}:敵の攻撃。${deffence}のダメージを受けた！`);
                }

                //ダメージ演出
                function damage5(){
                    damage = ap - edp;
                    if(damage > 0){
                        ehp -= damage;
                        if(ehp <= 0){
                            //次のボタン判定でクリアにする
                            button = 999;
                            ehp = 0;
                        }
                    }else{
                        damage = 0;
                    }
                    status(hp,ap,dp,ehp,eap,edp);
                    $(".downer-box-text").html(`Turn${turn}:プレイヤの攻撃。${damage}のダメージを与えた！`);
                }

                $(".next").on("click",function(){
                    //ボタンを押した回数をカウント
                    
                    //何ターン目か計算して代入
                    turn = Math.floor(button / 10);
                    //ターン中のどの処理かを判断する値を代入
                    count = button % 10;

                    //0ターンで分岐
                    if(turn === 0){
                        switch(count){
                            case 0:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("……警告はしたわ");
                            break
                            case 1:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("貴方はここに来るまでに<br>沢山の困難を乗り越えてきたかもしれない<br>案外そうではないかもしれない");
                            break
                            case 2:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("――ごめんなさいね、私は……<br>貴方を倒し、より高次元の存在に<br>ならないといけないの");
                            break
                            case 3:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("貴方の知らない次の世界に辿り着くの<br>この世界は陳腐なものだらけ<br>……例えば、貴方のように");
                               
                            break
                            case 4:
                                $(".downer-box-text").html("……水晶起動。私を護りなさい");
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit07.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                button = 9;
                            break
                        }
                    }else if(turn === 11){
                        //ゲームオーバ処理
                        switch(count){
                            case 0:
                                $(".downer-box-text").html(`10ターン以内に倒すことができなかった…`);
                            break
                            case 1:
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit20.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $(".downer-box-text").html("あなたは倒された…！！！");
                                $(".upper-box-text").html("ＧＡＭＥＯＶＥＲ");
                            break
                            case 2:
                                $(".downer-box-text").html(`貴方も所詮その程度<br>この世界も所詮この程度`);
                            break
                            case 3:
                                $(".downer-box-text").html(`……なんてつまらない`);
                            break
                            case 4:
                                
                                $(".upper-box-text").html("");
                                $(".downer-box-text").html("");
                                $(".next").remove();
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $("img").attr("src","");
                                stageSelect();
                        
                            break
                        }
                        

                    }else if(turn === 100){
                        //クリア処理
                        switch(count){
                            case 0:
                                $(".upper-box-text").text("LAST STAGE CLERE");
                                $(".downer-box-text").text("水晶の魔女を倒した");
                                
                            break
                            case 1:
                                $(".downer-box-text").html("なぜ、貴方にはわかったの？<br>私は限りなく不可能に近い道だけを<br>敷いたのに……");
                            break
                            case 2:
                                $(".downer-box-text").html("この世界も案外捨てたものじゃ<br>なかったわ。あぁ、欲を言うなら");
                                
                            break
                            case 3:
                                $(".downer-box-text").html("私が死ぬ前に、貴方のような人に<br>……出会いたかったわ");
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit13.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                            break
                            case 4:
                                $(".downer-box-text").html("GAME CLEAR!!!");
                            break
                            case 5:
                                $(".upper-box-text").html("");
                                $(".downer-box-text").html("");
                                $(".next").remove();
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $("img").attr("src","");
                                stageSelect();
                            break
                        }

                    }else if(turn === 1){
                        switch(count){
                            case 0:
                                $(".downer-box-text").html(`Turn${turn}:スキル『あなたの弱さがわたしの強さ』<br>『余らせた力』を敵が吸収し<br>全能力値を上昇させた！！`); 
                                enemySkill5a();
                            break
                            case 1:
                                $(".downer-box-text").html(`Turn${turn}:魔法使いのスキル『わたしの脆さ』<br>敵の能力値が1000を超えた場合<br>その値から1000を減らす`); 
                                enemySkill5b();
                            break
                            case 2:      
                                if(edp <= 99){
                                    $(".downer-box-text").html("敵の増幅水晶の力の源である<br>『敵防御力』が足りないため機能しない！<br>……また攻撃力が13に固定された！！"); 
                                    enemySkill5c();
                                }else{
                                    $(".downer-box-text").html("敵は水晶の力で<br>己の生存力を増幅している！！");   
                                    enemySkill5d();                           
                                }
                            break
                            case 3:
                                deffence5();
                            break
                            case 4:
                                damage5();
                                if(button === 999){

                                }else{
                                    button += 5
                                }
                            break
                        }
                    }else if(turn >= 1){
                        switch(count){
                            
                            case 0:      
                                if(edp <= 99){
                                    $(".downer-box-text").html("敵の増幅水晶の力の源である<br>敵防御力が足りないため<br>機能しない！！"); 
                                    enemySkill5c();
                                }else{
                                    $(".downer-box-text").html("敵は水晶の力で<br>己の生存力を増幅している！！");  
                                    enemySkill5d();                             
                                }
                            break
                            
                            case 1:
                                deffence5();
                            break
                            case 2:
                                damage5();
                                if(button === 999){

                                }else{
                                    button += 7
                                }
                            break
                        }
                    }
                    button++;
                });
            }


            //ステージ4処理
            function stage4(hp,ap,dp,point){
                let button = 0;
                let ehp = 75;
                let eap = 30;
                let edp = 15;
                let ehp1 = 75;
                let eap1 = 30;
                let edp1 = 15;
                let ehp2 = 90;
                let eap2 = 40;
                let edp2 = 10;
                let damage = 0;
                let deffence = 0;
                let count = 0;
                let turn = 0;
                //兄は２、弟は１
                let which = 1;
                //痛恨の一撃時に防御力を保存する
                let diffenceP = 0;
                $("<button class='next'>next</button>").appendTo(".center-box");

                //殺人鬼のスキル処理a
                function enemySkill4a(){
                    
                    if(turn % 2 === 0){
                        ehp = ehp2;
                        eap = eap2;
                        edp = edp2;
                        which = 2;
                    }else if(turn % 2 === 1){
                        ehp = ehp1;
                        eap = eap1;
                        edp = edp1;
                        which = 1;
                    }

                    $(".downer-box-text").html(`Turn${turn}:殺人鬼のスキル『二人で一人』<br>敵対する相手がターンごとに入れ替わる<br>（倒すのはどちらかだけでよい）`);
                    status(hp,ap,dp,ehp,eap,edp);
                }

                //殺人鬼のスキル処理b
                function enemySkill4b(){
                   
                    $(".downer-box-text").html(`Turn${turn}:殺人鬼のスキル『護身術』<br>プレイヤーの攻撃力を読み取り<br>敵二人の体力を増強した！`);
                    ehp += ap;
                    ehp1 += ap;
                    ehp2 += ap;
                    status(hp,ap,dp,ehp,eap,edp);
                }

                function enemySkill4c(){
                    $(".downer-box-text").html(`Turn${turn}:殺人鬼のスキル『痛恨の一撃』<br>プレイヤーの防御力が<br>このターン0になる！`);
                    diffenceP = dp;
                    dp = 0;
                    status(hp,ap,dp,ehp,eap,edp);
                }

                function enemySkill4c2(){
                    $(".downer-box-text").html(`Turn${turn}:殺人鬼のスキル『痛恨の一撃』<br>の効果が切れプレイヤーの防御力が復活！`);
                    dp = diffenceP;
                    status(hp,ap,dp,ehp,eap,edp);
                }

                //敵からのダメージ演出
                function deffence4(){
                    deffence = eap - dp;
                    if(deffence > 0){
                        hp -= deffence;
                        if(hp <= 0){
                            button = 110;
                            hp = 0;
                        }
                    }else{
                        deffence = 0;
                    }
                    status(hp,ap,dp,ehp,eap,edp);
                    $(".downer-box-text").html(`Turn${turn}:敵の攻撃。${deffence}のダメージを受けた！`);
                }

                //ダメージ演出
                function damage4(){
                    damage = ap - edp;
                    if(damage > 0){
                        ehp -= damage;
                        if(ehp > 0){
                            if(which === 1){
                                ehp1 = ehp;
                            }else{
                                ehp2 = ehp;
                            }
                        }else if(ehp <= 0){
                            //次のボタン判定でクリアにする
                            button = 999;
                            ehp = 0;
                        }
                    }else{
                        damage = 0;
                    }
                    status(hp,ap,dp,ehp,eap,edp);
                    $(".downer-box-text").html(`Turn${turn}:プレイヤの攻撃。${damage}のダメージを与えた！`);
                }

                $(".next").on("click",function(){
                    //ボタンを押した回数をカウント
                    
                    //何ターン目か計算して代入
                    turn = Math.floor(button / 10);
                    //ターン中のどの処理かを判断する値を代入
                    count = button % 10;

                    //0ターンで分岐
                    if(turn === 0){
                        switch(count){
                            case 0:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("兄（右）……え？どうして人がいるのだ？弟よ");
                            break
                            case 1:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("弟（左）アジトのカギ閉めてなかったんじゃ？<br>あれほど、杏仁豆腐買った帰りには<br>カギ閉めろって言ったのに");
                            break
                            case 2:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("くそっ！オートロックにしとけばよかった！<br>今時なんで最新鋭の悪の組織のアジトが<br>カギをガチャガチャして閉める奴なのだ！");
                            break
                            case 3:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("知らんわ。迎撃するよ、先に行く");
                                
                            break
                            case 4:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("おお！頼もしいぞ！さすが我が弟！<br>兄貴もすぐ行くからな！");
                                button = 9;
                            break
                            
                        }
                    }else if(turn === 11){
                        //ゲームオーバ処理
                        switch(count){
                            case 0:
                                $(".downer-box-text").html(`10ターン以内に倒すことができなかった…`);
                            break
                            case 1:
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit20.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $(".downer-box-text").html("あなたは倒された…！！！");
                                $(".upper-box-text").html("ＧＡＭＥＯＶＥＲ");
                            break
                            case 2:
                                $(".downer-box-text").html(`兄（右）さすが我々だ、正義気取りなど<br>けちょんけちょんのぼこっぼこに<br>してやればいいのだ`);
                            break
                            case 3:
                                $(".downer-box-text").html(`弟（左）オートロックにする？こいつ何気に<br>金目の物持ってるよ`);
                            break
                            case 4:
                                $(".downer-box-text").html(`なんと！！我がアジトにもようやく<br>『あいでぃー』の時代が来るのだな`);
                            break
                            case 5:
                                $(".downer-box-text").html(`それを言うならITっしょ`);
                            break
                            case 6:
                                
                                $(".upper-box-text").html("");
                                $(".downer-box-text").html("");
                                $(".next").remove();
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $("img").attr("src","");
                                stageSelect();
                        
                            break
                        }
                        

                    }else if(turn === 100){
                        //クリア処理
                        switch(count){
                            case 0:
                                $(".upper-box-text").text("STAGE4 CLERE");
                                $(".downer-box-text").text("殺人鬼を倒した");
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit13.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                            break
                            case 1:
                                $(".downer-box-text").html("兄（右）……弟よ、大丈夫か……？");
                            break
                            case 2:
                                $(".downer-box-text").html("弟（左）……思ったより強かったね<br>仕方ない。");
                            break
                            case 3:
                                $(".downer-box-text").html("……弟よ、杏仁豆腐、やるから生きろ<br>生クリームが乗ってるタイプなんだ<br>300円もしたんだぞ");
                            break
                            case 4:
                                $(".downer-box-text").html("……あー、おいしそうだね。<br>兄貴ごめん、俺……ぐふっ");
                            break
                            case 5:
                                $(".downer-box-text").html("……弟よ。出来の悪い兄貴ですまんな<br>あー。俺たちの悪事もここまでか<br>そこの強いやつ、お願いがある");
                            break
                            case 6:
                                $(".downer-box-text").html("……弟を葬るのを手伝ってくれないか？<br>うんと奇麗なところにしてやりたい");
                            break
                            case 7:
                                $(".upper-box-text").html("");
                                $(".downer-box-text").html("");
                                $(".next").remove();
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $("img").attr("src","");
                                stageSelect();
                            break
                        }

                    }else if(turn === 1){
                        switch(count){
                            case 0:
                                $(".downer-box-text").html("敵は素早く戦闘態勢を整えた！"); 
                            break
                            case 1:
                                enemySkill4a();
                            break
                            case 2:
                                enemySkill4b();
                            break
                            case 3:
                                deffence4();
                            break
                            case 4:
                                damage4();
                                if(button === 999){

                                }else{
                                    button += 5
                                }
                            break
                        }
                    
                    }else if(turn % 5 === 0){
                        switch(count){
                            case 0:
                                $(".downer-box-text").html("弟（左）……ところで、二人で襲い掛かったほうが<br>早く倒せるんじゃね？"); 
                            break
                            case 1:
                                $(".downer-box-text").html("兄（右）それはダメだ！！よく考えろ弟よ！<br>そんなのフェアじゃないぞ！！"); 
                            break
                            case 2:
                                $(".downer-box-text").html("……仕方ない、本気で行くか"); 
                            break
                            case 3:                        
                                $(".downer-box-text").html("敵は華麗な身のこなしで<br>ポジションが入れ替わる！！");                              
                            break
                            case 4:
                                enemySkill4a();
                            break
                            case 5:
                                enemySkill4c();
                            break
                            case 6:
                                deffence4();
                            break
                        
                            case 7:
                                damage4();
                                
                            break
                            case 8:
                                enemySkill4c2();
                                button += 1;
                            break

                        }
                    }else if(turn >= 2){
                        switch(count){
                            case 0:                        
                                $(".downer-box-text").html("敵は華麗な身のこなしで<br>ポジションが入れ替わる！！");                              
                            break
                            case 1:
                                enemySkill4a();
                            break
                            
                            case 2:
                                deffence4();
                            break
                            case 3:
                                damage4();
                                if(button === 999){

                                }else{
                                    button += 6
                                }
                            break
                        }
                    }
                    button++;
                });
            }

            //チュートリアルステージ処理
            function tutorial(hp,ap,dp,point){
                let button = 0;
                let ehp = 50;
                let eap = 10;
                let edp = 5;
                let damage = 0;
                let deffence = 0;
                let count = 0;
                let turn = 0;
                $("<button class='next'>next</button>").appendTo(".center-box");

                //チュートリアルのスキル処理
                function enemySkill0(){
                    if(hp <= 3){
                        hp = 0;
                        button = 110;
                    }else{
                        hp -= 3;
                    }
                    $(".downer-box-text").html(`Turn${turn}:かかしのスキル発動<br>仕込み矢<br>プレイヤーに３のダメージを与えた！`);
                    status(hp,ap,dp,ehp,eap,edp);
                }

                //敵からのダメージ演出
                function deffence0(){
                    deffence = eap - dp;
                    if(deffence > 0){
                        hp -= deffence;
                        if(hp <= 0){
                            button = 110;
                            hp = 0;
                        }
                    }else{
                        deffence = 0;
                    }
                    status(hp,ap,dp,ehp,eap,edp);
                    $(".downer-box-text").html(`Turn${turn}:敵の攻撃。${deffence}のダメージを受けた！`);
                }

                //ダメージ演出
                function damage0(){
                    damage = ap - edp;
                    if(damage > 0){
                        ehp -= damage;
                        if(ehp <= 0){
                            //次のボタン判定でクリアにする
                            button = 999;
                            ehp = 0;
                        }
                    }else{
                        damage = 0;
                    }
                    status(hp,ap,dp,ehp,eap,edp);
                    $(".downer-box-text").html(`Turn${turn}:プレイヤの攻撃。${damage}のダメージを与えた！`);
                }

                $(".next").on("click",function(){
                    //ボタンを押した回数をカウント
                    
                    //何ターン目か計算して代入
                    turn = Math.floor(button / 10);
                    //ターン中のどの処理かを判断する値を代入
                    count = button % 10;

                    //0ターンで分岐
                    if(turn === 0){
                        switch(count){
                            case 0:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("値1で体力1を割り振れます<br>値4で攻撃1、値7で防御1<br>矢印キーで割り振ってから戦闘します");
                            break
                            case 1:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("戦闘ではまず敵のスキルが発動します<br>その後敵の攻撃<br>敵攻撃-自防御 の値がダメージです");
                            break
                            case 2:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("そのあと自分の攻撃になります<br>自攻撃-敵防御 が敵体力から減らされます");
                            break
                            case 3:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("勝利条件は、敵の体力を０にすること<br>敗北条件は、自分の体力が０になるか<br>１０ターン経過時、敵を倒せなかった場合です");
                            break
                            case 4:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("ちなみに全部の値を始めに<br>割り振らず、余らせても大丈夫です<br>では模擬戦闘スタート");
                                button = 9;
                            break
                        }
                    }else if(turn === 11){
                        //ゲームオーバ処理
                        switch(count){
                            case 0:
                                $(".downer-box-text").html(`10ターン以内に倒すことができなかった…`);
                            break
                            case 1:
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit20.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $(".downer-box-text").html("敗北しました、また試してみてください");
                                $(".upper-box-text").html("ＧＡＭＥＯＶＥＲ");
                            break
                            case 2:
                                $(".downer-box-text").html(`敵を倒す方法は一つではないかもしれません`);
                            break
                            case 3:
                                $(".downer-box-text").html(`頑張ってください`);
                            break
                            case 4:
                                
                                $(".upper-box-text").html("");
                                $(".downer-box-text").html("");
                                $(".next").remove();
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $("img").attr("src","");
                                stageSelect();
                        
                            break
                        }
                        

                    }else if(turn === 100){
                        //クリア処理
                        switch(count){
                            case 0:
                                $(".upper-box-text").text("チュートリアル CLERE");
                                $(".downer-box-text").text("かかしを倒した");
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit13.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                            break
                            case 1:
                                $(".downer-box-text").html("このように敵を倒すことでクリアとなります");
                            break
                            case 2:
                                $(".downer-box-text").html("敵のスキルは複数存在したり<br>特定条件でしか発動しない<br>ものもあるようです");
                            break
                            case 3:
                                $(".downer-box-text").html("健闘を祈ります");
                            break
                            case 4:
                                $(".upper-box-text").html("");
                                $(".downer-box-text").html("");
                                $(".next").remove();
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $("img").attr("src","");
                                stageSelect();
                            break
                        }

                    }else if(turn >= 1){
                        switch(count){
                            case 0:
                                
                                    $(".downer-box-text").html("かかしが攻撃してくるようだ！！");
                                
                                
                            break
                            case 1:
                                enemySkill0();
                                
                            break
                            case 2:
                                deffence0();
                            break
                            case 3:
                                damage0();
                                if(button === 999){

                                }else{
                                    button += 6
                                }
                            break
                        }
                    }
                    button++;
                });
            }

            //ステージ3処理
            function stage3(hp,ap,dp,point){
                let button = 0;
                let ehp = 5;
                let eap = 10;
                let edp = 10;
                let damage = 0;
                let deffence = 0;
                let count = 0;
                let turn = 0;
                $("<button class='next'>next</button>").appendTo(".center-box");

                //天竜のスキル処理a
                function enemySkill3a(){
                    //プレイヤーの最も高い能力値を選んで2で割り、切り上げる。高い数が複数ある場合は足し合わせる
                    let add = 0;
                    if(hp === ap && hp === dp){
                        add = Math.ceil((hp + ap + dp) / 2);
                    }else if(hp === ap && hp > dp){
                        add = Math.ceil((hp + ap) / 2);
                    }else if(hp === dp && hp > ap){
                        add = Math.ceil((hp + dp) / 2);
                    }else if(ap === dp && ap > hp){
                        add = Math.ceil((ap + dp) / 2);
                    }else if(hp > ap && hp > dp){
                        add = Math.ceil(hp / 2);
                    }else if(ap > hp && ap > dp){
                        add = Math.ceil(ap / 2);
                    }else if(dp > hp && dp > ap){
                        add = Math.ceil(dp / 2);
                    }

                    //体力と攻防（この二つは敵は常に一致）を比較し、低いほうにaddを加える
                    if(ehp === eap){
                        ehp += add;
                        eap += add;
                        edp += add;
                    }else if(ehp > eap){
                        eap += add;
                        edp += add;
                    }else if(ehp < eap){
                        ehp += add;
                    }
                    
                    /*else if(ap === dp && ap > hp){
                        eap += add;
                        edp += add;
                    }else if(hp > ap && hp > dp){
                        ehp += add;
                    }else if(ap > hp && ap > dp){
                        eap += add;
                    }else if(dp > hp && dp > ap){
                        edp += add;
                    }*/


                    $(".downer-box-text").html(`Turn${turn}:天竜のスキル『強者復活』<br>プレイヤーの最も高い能力値を吸収し<br>天竜の最も低い能力値に加えた！`);
                    status(hp,ap,dp,ehp,eap,edp);
                }

                //天竜のスキル処理b
                function enemySkill3b(){
                    let life = 0;
                    if(ap > dp){
                        life = ap - dp;
                    }else{
                        life = dp - ap;
                    }
                    ehp += life;

                    $(".downer-box-text").html(`Turn${turn}:天竜のスキル『再生』<br>プレイヤーの能力値（攻and防）の差を吸収<br>天竜の体力に加えた！`);
                    status(hp,ap,dp,ehp,eap,edp);
                }

                //敵からのダメージ演出
                function deffence3(){
                    deffence = eap - dp;
                    if(deffence > 0){
                        hp -= deffence;
                        if(hp <= 0){
                            button = 110;
                            hp = 0;
                        }
                    }else{
                        deffence = 0;
                    }
                    status(hp,ap,dp,ehp,eap,edp);
                    $(".downer-box-text").html(`Turn${turn}:敵の攻撃。${deffence}のダメージを受けた！`);
                }

                //ダメージ演出
                function damage3(){
                    damage = ap - edp;
                    if(damage > 0){
                        ehp -= damage;
                        if(ehp <= 0){
                            //次のボタン判定でクリアにする
                            button = 999;
                            ehp = 0;
                        }
                    }else{
                        damage = 0;
                    }
                    status(hp,ap,dp,ehp,eap,edp);
                    $(".downer-box-text").html(`Turn${turn}:プレイヤの攻撃。${damage}のダメージを与えた！`);
                }

                $(".next").on("click",function(){
                    //ボタンを押した回数をカウント
                    
                    //何ターン目か計算して代入
                    turn = Math.floor(button / 10);
                    //ターン中のどの処理かを判断する値を代入
                    count = button % 10;

                    //0ターンで分岐
                    if(turn === 0){
                        switch(count){
                            case 0:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("……お前は誰だ");
                            break
                            case 1:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("我が肉体の復活を前にし<br>お前はどうする気だ");
                            break
                            case 2:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("我をどうするかよりまず……");
                            break
                            case 3:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("己の身が滅びぬ選択をすることだな");
                                button = 9;
                            break
                            
                        }
                    }else if(turn === 11){
                        //ゲームオーバ処理
                        switch(count){
                            case 0:
                                $(".downer-box-text").html(`10ターン以内に倒すことができなかった…`);
                            break
                            case 1:
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit20.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $(".downer-box-text").html("あなたは倒された…！！！");
                                $(".upper-box-text").html("ＧＡＭＥＯＶＥＲ");
                            break
                            case 2:
                                $(".downer-box-text").html(`我の肉体の完全復活も近い`);
                            break
                            case 3:
                                $(".downer-box-text").html(`さらば、だ`);
                            break
                            case 4:
                                
                                $(".upper-box-text").html("");
                                $(".downer-box-text").html("");
                                $(".next").remove();
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $("img").attr("src","");
                                stageSelect();
                        
                            break
                        }
                        

                    }else if(turn === 100){
                        //クリア処理
                        switch(count){
                            case 0:
                                $(".upper-box-text").text("STAGE3 CLERE");
                                $(".downer-box-text").text("天空竜を倒した");
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit13.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                            break
                            case 1:
                                $(".downer-box-text").html("我が望みを……このようなところで……");
                            break
                            case 2:
                                $(".downer-box-text").html("貴様……！！ぐ……ぐおっ……");
                            break
                            case 3:
                                $(".downer-box-text").html("天空流は地に落ち、息絶えた");
                            break
                            case 4:
                                $(".upper-box-text").html("");
                                $(".downer-box-text").html("");
                                $(".next").remove();
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $("img").attr("src","");
                                stageSelect();
                            break
                        }

                    }else if(turn >= 1){
                        switch(count){
                            case 0:                        
                                    $(".downer-box-text").html("敵は肉体を再生させ<br>己の身を強化している！！");                              
                            break
                            case 1:
                                enemySkill3a();
                            break
                            case 2:
                                enemySkill3b();
                            break
                            case 3:
                                deffence3();
                            break
                            case 4:
                                damage3();
                                if(button === 999){

                                }else{
                                    button += 5
                                }
                            break
                        }
                    }
                    button++;
                });
            }

            //ステージ2処理
            function stage2(hp,ap,dp,point){
                let button = 0;
                let ehp = 60;
                let eap = 40;
                let edp = 65;
                let damage = 0;
                let deffence = 0;
                let count = 0;
                let turn = 0;
                $("<button class='next'>next</button>").appendTo(".center-box");

                //遺跡兵のスキル処理
                function enemySkill2(){
                    if(ehp > turn){
                        ehp -= turn;
                    }else{
                        ehp = 0;
                        button = 999;
                    }
                    if(eap > turn){
                        eap -= turn;
                    }else{
                        eap = 0;
                    }
                    if(edp > turn){
                        edp -= turn;
                    }else{
                        edp = 0;
                    }
                    $(".downer-box-text").html(`Turn${turn}:遺跡兵のスキル発動<br>『朽ちた機械』<br>敵の能力すべてが${turn}下がった！`);
                    status(hp,ap,dp,ehp,eap,edp);
                }

                //敵からのダメージ演出
                function deffence2(){
                    deffence = eap - dp;
                    if(deffence > 0){
                        hp -= deffence;
                        if(hp <= 0){
                            button = 110;
                            hp = 0;
                        }
                    }else{
                        deffence = 0;
                    }
                    status(hp,ap,dp,ehp,eap,edp);
                    $(".downer-box-text").html(`Turn${turn}:敵の攻撃。${deffence}のダメージを受けた！`);
                }

                //ダメージ演出
                function damage2(){
                    damage = ap - edp;
                    if(damage > 0){
                        ehp -= damage;
                        if(ehp <= 0){
                            //次のボタン判定でクリアにする
                            button = 999;
                            ehp = 0;
                        }
                    }else{
                        damage = 0;
                    }
                    status(hp,ap,dp,ehp,eap,edp);
                    $(".downer-box-text").html(`Turn${turn}:プレイヤの攻撃。${damage}のダメージを与えた！`);
                }

                $(".next").on("click",function(){
                    //ボタンを押した回数をカウント
                    
                    //何ターン目か計算して代入
                    turn = Math.floor(button / 10);
                    //ターン中のどの処理かを判断する値を代入
                    count = button % 10;

                    //0ターンで分岐
                    if(turn === 0){
                        switch(count){
                            case 0:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("…………");
                            break
                            case 1:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("………遺跡二侵入者アリ<br>警告シマス……");
                            break
                            case 2:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("コノ遺跡二、貴方ノ探テイルモノハ<br>アリマセン。立チ去リナサイ");
                            break
                            case 3:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("………");
                            break
                            case 4:
                                status(hp,ap,dp,ehp,eap,edp);
                                $(".downer-box-text").html("……立チ去ル意思ナシ<br>侵入者ヲ排除シマス");
                                button = 9;
                            break
                        }
                    }else if(turn === 11){
                        //ゲームオーバ処理
                        switch(count){
                            case 0:
                                $(".downer-box-text").html(`10ターン以内に倒すことができなかった…`);
                            break
                            case 1:
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit20.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $(".downer-box-text").html("あなたは倒された…！！！");
                                $(".upper-box-text").html("ＧＡＭＥＯＶＥＲ");
                            break
                            case 2:
                                $(".downer-box-text").html(`侵入者ノ排除完了……引キ続キ警戒任…………`);
                            break
                            case 3:
                                $(".downer-box-text").html(`守護者は動かない`);
                            break
                            case 4:
                                
                                $(".upper-box-text").html("");
                                $(".downer-box-text").html("");
                                $(".next").remove();
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $("img").attr("src","");
                                stageSelect();
                        
                            break
                        }
                        

                    }else if(turn === 100){
                        //クリア処理
                        switch(count){
                            case 0:
                                $(".upper-box-text").text("STAGE2 CLERE");
                                $(".downer-box-text").text("遺跡の守護者を倒した");
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit13.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                            break
                            case 1:
                                $(".downer-box-text").html("……機能ノ低下ヲ確認。遺跡ヲ…<br>遺跡ノ…守護……不可能…");
                            break
                            case 2:
                                $(".downer-box-text").html("…………");
                            break
                            case 3:
                                $(".downer-box-text").html("守護者の機能は完全に停止した");
                            break
                            case 4:
                                $(".upper-box-text").html("");
                                $(".downer-box-text").html("");
                                $(".next").remove();
                                audio.pause();
                                audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                                audio.loop = true;
                                audio.volume = bmgVol;
                                audio.play();
                                $("img").attr("src","");
                                stageSelect();
                            break
                        }

                    }else if(turn >= 1){
                        switch(count){
                            case 0:
                                if(turn === 9){
                                    $(".downer-box-text").html("敵の機能が大幅に低下<br>攻撃ができないようだ");
                                }else{
                                    $(".downer-box-text").html("敵の体は朽ちている！！");
                                }
                                
                            break
                            case 1:
                                enemySkill2();
                                
                            break
                            case 2:
                                deffence2();
                            break
                            case 3:
                                damage2();
                                if(button === 999){

                                }else{
                                    button += 6
                                }
                            break
                        }
                    }
                    button++;
                });
            }
            
            //ステージ1処理
            function stage1(hp,ap,dp,point){
                let bt2 = bt;
                let button = 0;
                let ehp = 40;
                let eap = 5;
                let edp = 0;
                let damage = 0;
                let deffence = 0;
                $("<button class='next'>next</button>").appendTo(".center-box");
               
                
                //敵からのダメージ演出
                function deffence1(){
                    deffence = eap - dp;
                    if(deffence > 0){
                        hp -= deffence;
                        if(hp <= 0){
                            button = 100;
                            hp = 0;
                        }
                    }else{
                        deffence = 0;
                    }
                }

                //ダメージ演出
                function damage1(){
                    damage = ap - edp;
                    if(damage > 0){
                        ehp -= damage;
                        if(ehp <= 0){
                            //次のボタン判定でクリアにする
                            button = 999;
                            ehp = 0;
                        }
                    }else{
                        damage = 0;
                    }
                   
                }
                //スライムのスキル処理
                function enemySkill(){
                    if(hp>0){
                        hp--;
                        if(hp === 0){
                            button = 100;
                        }
                    }
                    if(ap>0){
                        ap--;
                    }
                    if(dp>0){
                        dp--;
                    }
                }

                $(".next").on("click",function(){
                    button++;
                    
                    switch(button){
                        case 1:
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("スライム「このような世界では<br>僕らのようなスライムがお試し相手と<br>決まっているらしい。」");
                        break
                        case 2:
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("スライム「まったく、嫌になってしまうね。<br>さて、倒せるものなら倒してみな」");
                        break
                        case 3:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn1:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 4:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn1:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 5:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn1:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 6:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn2:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 7:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn2:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 8:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn2:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 9:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn3:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 10:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn3:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 11:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn3:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 12:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn4:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 13:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn4:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 14:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn4:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 15:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn5:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 16:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn5:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 17:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn5:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 18:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn6:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 19:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn6:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 20:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn6:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 21:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn7:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 22:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn7:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 23:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn7:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 24:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn8:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 25:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn8:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 26:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn8:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 27:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn9:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 28:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn9:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 29:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn9:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 30:
                            
                            enemySkill();
                            
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html("Turn10:スライムのスキル発動<br>『弱体粘液』<br>プレイヤーの能力すべてを１下げた！");
                        break
                        case 31:
                            deffence1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn10:スライムの攻撃。${deffence}のダメージを受けた！`);
                        break
                        case 32:
                            damage1();
                            status(hp,ap,dp,ehp,eap,edp);
                            $(".downer-box-text").html(`Turn10:プレイヤーの攻撃。${damage}のダメージを与えた！`);
                        break
                        case 33:
                            $(".downer-box-text").html(`10ターン以内に倒すことができなかった…`);

                        case 1000:
                            $(".upper-box-text").text("STAGE1 CLERE");
                            $(".downer-box-text").text("スライムLV50を倒した");
                            audio.pause();
                            audio = new Audio("./bgm/bgm_maoudamashii_8bit13.mp3");
                            audio.loop = true;
                            audio.volume = bmgVol;
                            audio.play();
                            
                        break
                        case 1001:
                            $(".downer-box-text").html("…まったく理不尽だ<br>君たちからすれば僕は石ころ…");
                        break
                        case 1002:
                            $(".downer-box-text").html("僕たちからすれば…同じ石でも<br>まるで隕石…理不尽な強さの…");
                        break
                        case 1003:
                            $(".upper-box-text").html("");
                            $(".downer-box-text").html("");
                            $(".next").remove();
                            audio.pause();
                            audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                            audio.loop = true;
                            audio.volume = bmgVol;
                            audio.play();
                            $("img").attr("src","");
                            stageSelect();
                        break
                        case 101:
                            audio.pause();
                            audio = new Audio("./bgm/bgm_maoudamashii_8bit20.mp3");
                            audio.loop = true;
                            audio.volume = bmgVol;
                            audio.play();
                            $(".downer-box-text").html("あなたは倒された…！！！");
                            $(".upper-box-text").html("ＧＡＭＥＯＶＥＲ");
                            
                        break
                        case 102:
                            $(".downer-box-text").html("残念だったね。僕だって<br>簡単にやられるわけにはいかない");
                        break
                        case 103:
                            $(".downer-box-text").html("そこでくたばりなよ<br>君の冒険は終わりさ");
                        break
                        case 104:
                            $(".upper-box-text").html("");
                            $(".downer-box-text").html("");
                            $(".next").remove();
                            audio.pause();
                            audio = new Audio("./bgm/bgm_maoudamashii_8bit21.mp3");
                            audio.loop = true;
                            audio.volume = bmgVol;
                            audio.play();
                            $("img").attr("src","");
                            stageSelect();
                        break
                    }

                });
                
                
            }


            
        }
        //値を増減
        function parameterSet(way,digit,calc){
            //下キーを押した場合
            if(calc === "sub"){
                if(way === 0){
                    if(digit === 0){
                        if(hitPoint1 >= 1){
                            if(hitPoint2 === 0 && hitPoint3 === 0){
                                maxPoint = maxPoint + 99;
                                hitPoint1--;
                                
                                hitPoint3 = 1;
                            }else{
                                maxPoint = maxPoint + 100;
                                hitPoint1--;

                            }
                            
                        }
                    }else if(digit === 1){
                        if(hitPoint1 >= 1 || (hitPoint1 === 0 && hitPoint2 >= 1)){
                            if(hitPoint2 === 0){

                                hitPoint1--;
                                hitPoint2 = 9;
                                maxPoint = maxPoint + 10;
                            }else{
                                if(hitPoint1 === 0 && hitPoint3 === 0){
                                    hitPoint3 = 1;
                                    hitPoint2--;
                                    maxPoint = maxPoint + 9;
                                }else{
                                    hitPoint2--;
                                    maxPoint = maxPoint + 10;

                                }
                            }
                            
                            
                        }

                    }else if(digit === 2){
                        if(hitPoint1 >= 1 || hitPoint2 >= 1 || hitPoint3 >= 2){
                            if(hitPoint2 === 0 && hitPoint3 === 0){
                                hitPoint1--;
                                hitPoint2 = 9;
                                hitPoint3 = 9;
                            }else if(hitPoint3 === 0){
                                hitPoint2--;
                                hitPoint3 = 9;
                            }else{
                                
                                hitPoint3--;
                            }
                            

                            maxPoint++
                        }
                    }
                }else if(way === 1){
                    if(digit === 0){
                        if(attackPoint1 >= 1){
                            
                            maxPoint = maxPoint + 400;
                            attackPoint1--;
                            
                        }
                    }else if(digit === 1){
                        if(attackPoint1 >= 1 || attackPoint2 >= 1){
                            if(attackPoint2 === 0){

                                attackPoint1--;
                                attackPoint2 = 9;

                            }else{

                                attackPoint2--;
                            }
                            maxPoint = maxPoint + 40;
                            
                        }

                    }else if(digit === 2){
                        if(attackPoint1 >= 1 || attackPoint2 >= 1 || attackPoint3 >= 1){
                            if(attackPoint2 === 0 && attackPoint3 === 0){
                                attackPoint1--;
                                attackPoint2 = 9;
                                attackPoint3 = 9;
                            }else if(attackPoint3 === 0){
                                attackPoint2--;
                                attackPoint3 = 9;
                            }else{
                                
                                attackPoint3--;
                            }
                            

                            maxPoint = maxPoint + 4;
                        }
                    }
                }else if(way === 2){
                    if(digit === 0){
                        if(diffencePoint1 >= 1){
                            
                            maxPoint = maxPoint + 700;
                            diffencePoint1--;
                            
                        }
                    }else if(digit === 1){
                        if(diffencePoint1 >= 1 || diffencePoint2 >= 1){
                            if(diffencePoint2 === 0){

                                diffencePoint1--;
                                diffencePoint2 = 9;

                            }else{

                                diffencePoint2--;
                            }
                            maxPoint = maxPoint + 70;
                            
                        }

                    }else if(digit === 2){
                        if(diffencePoint1 >= 1 || diffencePoint2 >= 1 || diffencePoint3 >= 1){
                            if(diffencePoint2 === 0 && diffencePoint3 === 0){
                                diffencePoint1--;
                                diffencePoint2 = 9;
                                diffencePoint3 = 9;
                            }else if(diffencePoint3 === 0){
                                diffencePoint2--;
                                diffencePoint3 = 9;
                            }else{
                                
                                diffencePoint3--;
                            }
                            

                            maxPoint = maxPoint + 7;
                        }
                    }
                }
            //上キーを押した場合
            }else if(calc === "add"){
                if(way === 0){
                    if(digit === 0){
                        if(maxPoint >= 100){
                            
                            maxPoint = maxPoint - 100;
                            hitPoint1++;
                            
                        }
                    }else if(digit === 1){
                        if(maxPoint >= 10){
                            if(hitPoint2 === 9){

                                hitPoint1++;
                                hitPoint2 = 0;

                            }else{

                                hitPoint2++;
                            }
                            maxPoint = maxPoint - 10;
                            
                        }

                    }else if(digit === 2){
                        if(maxPoint >= 1){
                            if(hitPoint2 === 9 && hitPoint3 === 9){
                                hitPoint1++;
                                hitPoint2 = 0;
                                hitPoint3 = 0;
                            }else if(hitPoint3 === 9){
                                hitPoint2++;
                                hitPoint3 = 0;
                            }else{
                                
                                hitPoint3++;
                            }
                            

                            maxPoint--
                        }
                    }
                }else if(way === 1){
                    if(digit === 0){
                        if(maxPoint >= 400){
                            
                            maxPoint = maxPoint - 400;
                            attackPoint1++;
                            
                        }
                    }else if(digit === 1){
                        if(maxPoint >= 40){
                            if(attackPoint2 === 9){

                                attackPoint1++;
                                attackPoint2 = 0;

                            }else{

                                attackPoint2++;
                            }
                            maxPoint = maxPoint - 40;
                            
                        }

                    }else if(digit === 2){
                        if(maxPoint >= 4){
                            if(attackPoint2 === 9 && attackPoint3 === 9){
                                attackPoint1++;
                                attackPoint2 = 0;
                                attackPoint3 = 0;
                            }else if(attackPoint3 === 9){
                                attackPoint2++;
                                attackPoint3 = 0;
                            }else{
                                
                                attackPoint3++;
                            }
                            

                            maxPoint = maxPoint - 4;
                        }
                    }
                }else if(way === 2){
                    if(digit === 0){
                        if(maxPoint >= 700){
                            
                            maxPoint = maxPoint - 700;
                            diffencePoint1++;
                            
                        }
                    }else if(digit === 1){
                        if(maxPoint >= 70){
                            if(diffencePoint2 === 9){

                                diffencePoint1++;
                                diffencePoint2 = 0;

                            }else{

                                diffencePoint2++;
                            }
                            maxPoint = maxPoint - 70;
                            
                        }

                    }else if(digit === 2){
                        if(maxPoint >= 7){
                            if(diffencePoint2 === 9 && diffencePoint3 === 9){
                                diffencePoint1++;
                                diffencePoint2 = 0;
                                diffencePoint3 = 0;
                            }else if(diffencePoint3 === 9){
                                diffencePoint2++;
                                diffencePoint3 = 0;
                            }else{
                                
                                diffencePoint3++;
                            }
                            

                            maxPoint = maxPoint - 7;
                        }
                    }
                }
            }
        }

        //選択肢の移動
        function reText(way,digit){
            switch(way){
                case 0:
                    text =  `割り振れる値：${maxPoint} （Enterで決定です）`;
                    switch(digit){
                        case 0:
                        text = text + `<br><span>体力に振る</span>・攻撃に振る・防御に振る
                        <br>体力:<span>${hitPoint1}</span>${hitPoint2}${hitPoint3}
                        攻撃:${attackPoint1}${attackPoint2}${attackPoint3}
                        防御:${diffencePoint1}${diffencePoint2}${diffencePoint3}`;  
                        $(".parameter").html(`${text}`);
                        break;
                        case 1:
                        text = text + `<br><span>体力に振る</span>・攻撃に振る・防御に振る
                        <br>体力:${hitPoint1}<span>${hitPoint2}</span>${hitPoint3}
                        攻撃:${attackPoint1}${attackPoint2}${attackPoint3}
                        防御:${diffencePoint1}${diffencePoint2}${diffencePoint3}`;  
                        $(".parameter").html(`${text}`);
                        break;
                        case 2:
                        text = text + `<br><span>体力に振る</span>・攻撃に振る・防御に振る
                        <br>体力:${hitPoint1}${hitPoint2}<span>${hitPoint3}</span>
                        攻撃:${attackPoint1}${attackPoint2}${attackPoint3}
                        防御:${diffencePoint1}${diffencePoint2}${diffencePoint3}`;  
                        $(".parameter").html(`${text}`);
                        break;
                    }
                
                break;
                case 1:
                    text =  `割り振れる値：${maxPoint} （Enterで決定です）`;
                    switch(digit){
                        case 0:
                        text = text + `<br>体力に振る・<span>攻撃に振る</span>・防御に振る
                        <br>体力:${hitPoint1}${hitPoint2}${hitPoint3}
                        攻撃:<span>${attackPoint1}</span>${attackPoint2}${attackPoint3}
                        防御:${diffencePoint1}${diffencePoint2}${diffencePoint3}`;  
                        $(".parameter").html(`${text}`);
                        break;
                        case 1:
                        text = text + `<br>体力に振る・<span>攻撃に振る</span>・防御に振る
                        <br>体力:${hitPoint1}${hitPoint2}${hitPoint3}
                        攻撃:${attackPoint1}<span>${attackPoint2}</span>${attackPoint3}
                        防御:${diffencePoint1}${diffencePoint2}${diffencePoint3}`;  
                        $(".parameter").html(`${text}`);
                        break;
                        case 2:
                        text = text + `<br>体力に振る・<span>攻撃に振る</span>・防御に振る
                        <br>体力:${hitPoint1}${hitPoint2}${hitPoint3}
                        攻撃:${attackPoint1}${attackPoint2}<span>${attackPoint3}</span>
                        防御:${diffencePoint1}${diffencePoint2}${diffencePoint3}`;  
                        $(".parameter").html(`${text}`);
                        break;
                    }
                break;
                case 2:
                    text =  `割り振れる値：${maxPoint} （Enterで決定です）`;
                    switch(digit){
                        case 0:
                        text = text + `<br>体力に振る・攻撃に振る・<span>防御に振る</span>
                        <br>体力:${hitPoint1}${hitPoint2}${hitPoint3}
                        攻撃:${attackPoint1}${attackPoint2}${attackPoint3}
                        防御:<span>${diffencePoint1}</span>${diffencePoint2}${diffencePoint3}`;  
                        $(".parameter").html(`${text}`);
                        break;
                        case 1:
                        text = text + `<br>体力に振る・攻撃に振る・<span>防御に振る</span>
                        <br>体力:${hitPoint1}${hitPoint2}${hitPoint3}
                        攻撃:${attackPoint1}${attackPoint2}${attackPoint3}
                        防御:${diffencePoint1}<span>${diffencePoint2}</span>${diffencePoint3}`;  
                        $(".parameter").html(`${text}`);
                        break;
                        case 2:
                        text = text + `<br>体力に振る・攻撃に振る・<span>防御に振る</span>
                        <br>体力:${hitPoint1}${hitPoint2}${hitPoint3}
                        攻撃:${attackPoint1}${attackPoint2}${attackPoint3}
                        防御:${diffencePoint1}${diffencePoint2}<span>${diffencePoint3}</span>`;  
                        $(".parameter").html(`${text}`);
                        break;
                    }
                break;
            }
            

        }
    }

    
});

