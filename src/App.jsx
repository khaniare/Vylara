import React, { useState, useEffect } from 'react';

function Blog() {

  
  const [text, setText] = useState(
    <h1>
      <pre> </pre>
      <span style={{ fontSize: '0.8em', fontWeight: '300', color: '#999' }}>
        Welcome to...
        <br />
      </span>
      <b
        style={{
          fontSize: '5em',
          fontWeight: '600',
          background: 'linear-gradient(to right, #b7d8c3, #bdd4c5, #444444)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginLeft: '0.5em',
        }}
      >
        Vylara
      </b>
    </h1>,
  );

  const handleClick = () => {
    setText(
      <h3 className="glass">
        <span style={{ fontSize: '1em', fontWeight: '600', color: '#999' }}>
          C1: Knowing why you're here!
        </span>

        <p>
          <span style={{ fontSize: '1em', fontWeight: '300', color: '#999' }}>
            These are the devices that YOU can optimze, linux optimization will
            be here later.
          </span>
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <path fill="#1976d2" d="M6,6h17v17H6V6z"></path>
          <path fill="#1976d2" d="M25.042,22.958V6H42v16.958H25.042z"></path>
          <path fill="#1976d2" d="M6,25h17v17H6V25z"></path>
          <path fill="#1976d2" d="M25,42V25h17v17H25z"></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 30 30"
        >
          <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <path
            fill="#7cb342"
            d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"
          ></path>
          <path
            fill="#7cb342"
            d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"
          ></path>
          <path
            fill="#7cb342"
            d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"
          ></path>
        </svg>

        <p>
          <span style={{ fontSize: '1em', fontWeight: '300', color: '#999' }}>
            Use control + F and search one of the following...
          </span>
        </p>

        <ul>
          <li>Windows/</li>
          <li>IOS/</li>
          <li>Android/</li>
        </ul>

        <h3 className="glass2">
          <span style={{ fontSize: '1em', fontWeight: '600', color: '#999' }}>
            Windows/
          </span>
          <p>
            <span style={{ fontSize: '1em', fontWeight: '300', color: '#999' }}>
              So, your laptop, computer, pc—whatever it is—is slow. hm. We got
              u! First thing we need to realize is the operating system your
              using. Are you using Windows Home/Pro? get out of there. Use
              Windows LoT Enterprise or make your own ISO. This will give you
              the following advantages:
              <br></br>
              <br></br>• Faster System Overall <br></br>• Faster Boot time
              <br></br>• More FPS <br></br>• Tracking from Microsoft is mostly
              gone! <br></br>• Bloatware is gone! <br></br>
              <br></br>
              If you don't want to have to worry about moving to a whole
              different ISO, you can use a debloater.
              <a href="https://github.com/Sophia-Community/SophiApp?tab=readme-ov-file#installation">
                ‎ ㅤㅤㅤㅤSophiAppㅤ ㅤ
              </a>
              is a good debloater. It's really recommended to change your
              bloatware-full OS to a different one. Here are the steps to
              download a debloated version of Windows,
              <br></br> <br></br>
              1. Download Windows LoT Enterprise from the web,
              <a href="https://massgrave.dev/genuine-installation-media">
                ‎ here's one!
              </a>
              <br></br> <br></br>
              2. use <a href="https://rufus.ie/en/"> Rufus</a> to
              <a href="https://www.youtube.com/watch?v=moQvyVmLkIo">
                {' '}
                ‎create a bootable USB
              </a>
              <br></br> <br></br>
              3. When Rufus is done, do not take out the USB. You can exit out
              of the Rufus app though! Search up on how to disable secure boot
              and go to your bios menu for your computer, PC, etc.
              <br></br> <br></br>
              <span className="warning">
                From here on out, data from your computer could be wiped. Back
                up your data to the cloud if you want to get your
                downloads/pictures/etc back!!!
              </span>
            </span>
            <p>
              <span
                style={{ fontSize: '1em', fontWeight: '300', color: '#999' }}
              >
                4. Boot up your USB. We'll use the image below as reference for
                this guide, 𝘺𝘰𝘶𝘳 𝘤𝘰𝘮𝘱𝘶𝘵𝘦𝘳 𝘮𝘢𝘺 𝘩𝘢𝘷𝘦 𝘢 𝘥𝘪𝘧𝘧𝘦𝘳𝘦𝘯𝘵 𝘉𝘐𝘖𝘚.
                <br></br>
                <br></br>
                <img
                  src="https://media.discordapp.net/attachments/741347063077535874/1246543464834011217/IMG_2158.jpg?ex=66899891&is=66884711&hm=a66b7213a717ee3e83cc50f7aa4c9811cd9f3da3b53c5f0aa68e752fe40323a9&=&format=webp&width=500&height=375"
                  alt="One of the many boot screens..."
                ></img>
                <br></br>
                <br></br>
                5. According to the picture above, for me, all I need to do is
                press F5 to reorder USB FDD to the first slot! 𝘺𝘰𝘶𝘳 𝘤𝘰𝘮𝘱𝘶𝘵𝘦𝘳 𝘮𝘢𝘺
                𝘩𝘢𝘷𝘦 𝘢 𝘥𝘪𝘧𝘧𝘦𝘳𝘦𝘯𝘵 𝘉𝘐𝘖𝘚, 𝘥𝘰 𝘯𝘰𝘵𝘦!
                <br></br>
                <br></br>
                6. Once the USB is booted follow the windows setup guide as
                normal until you get here. Click Custom: Install windows only
                (advanced) ⤵<br></br>
                <br></br>
                <img
                  src="/src/assets/winsetup.PNG"
                  alt="picture did not load, error. "
                ></img>
                <br></br>
                <br></br>
                Then, when your at "where to install Windows?" Delete everything
                and select unallocated space then next. <br></br> <br></br>•
                When it tells you to enter a WIndows key, you can always skip if
                you dont have one. <br></br> <br></br>• When it ask for a
                education email, keep your gmail, enter, and then pick use your
                personal email. <br></br> <br></br>• Turn of all everything at
                the "Choose privacy settings for your device" step. You will not
                𝙣𝙚𝙚𝙙 any of it and it's just extra processes! <br></br>
                <br></br>
                ㅤㅤㅤㅤ ㅤ ㅤ ㅤㅤ ㅤNow your set! You now have a debloated
                version of Windows downloaded on your system! There is still
                more to go through so scroll down!
              </span>
            </p>
              <h3 className="glass2">
          <span style={{ fontSize: '1em', fontWeight: '600', color: '#999' }}>
            C2: Operating System, What do I need to do? 
          </span>
          </h3>
          <p>
          <span style={{ fontSize: '1em', fontWeight: '300', color: '#999' }}>
          Before downloading apps, you may want to download these files, they remove common errors such as the following... 
          <br></br><br></br>
          • MSVCP100.dll is missing<br></br>
• MSVCP140.dll is missing<br></br>
• MSVCP110.dll is missing<br></br>
• The program can't start because MSVCP.dll is missing<br></br>
• MSVCP120.dll is missing<br></br>
• MSVCP90.dll is missing<br></br>
• MSVCP71.dll is missing<br></br>
• MSVCP60.dll is missing<br></br>
• MSVCP140d.dll is missing<br></br>
• MSVCP110d.dll is missing<br></br>
• MSVCP100d.dll is missing<br></br>
• MSVCP120d.dll is missing<br></br>
• MSVCP90d.dll is missing<br></br>
• MSVCP71d.dll is missing<br></br>
• MSVCP60d.dll is missing<br></br>
• The procedure entry point _could_not_find_entry_point could not be located in the dynamic link library MSVCP.dll<br></br>
• The procedure entry point _get_invalid_parameter_handler could not be located in the dynamic link library MSVCP.dll<br></br>
• The procedure entry point _set_invalid_parameter_handler could not be located in the dynamic link library MSVCP.dll<br></br>
• MSVCP.dll is not a valid Windows image<br></br>
• MSVCP.dll is either not designed to run on Windows or it contains an error<br></br>

<br></br><br></br>

to fix all these errors you have to download, <a href="https://github.com/abbodi1406/vcredist/releases">this! ‎ </a>
This will download all the Microsoft Microsoft Visual C++ Redistributable Packs. 
          </span>

          <h3 className="glass2">
          <span style={{ fontSize: '1em', fontWeight: '600', color: '#999' }}>
            C2.5: Operating System, Mouse Optimization. 
          </span>
          </h3>
          <span style={{ fontSize: '1em', fontWeight: '300', color: '#999' }}>
          Your mouse needs to be snappy and good to get the best out of it. We recommend to watch this video from Youtuber, Panjno.
           <br></br>
           <br></br>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/phWz_k2P_S4?si=-oxDSL9i5dq_XfIo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </span>

              <h3 className="glass2">
          <span style={{ fontSize: '1em', fontWeight: '400', color: '#8B9467' }}>

          You've finally done it! Optimization for Windows is complete and you now officially possess a snappy Windows device that's ready to take on any task!          </span>
          </h3>

           </p>
          </p>
        </h3>
      </h3>,
    );
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return <div>{text}</div>;
}

export default Blog;
