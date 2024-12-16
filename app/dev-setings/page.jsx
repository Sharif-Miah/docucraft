const DeveloperSetting = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold  mb-10'>
        Configure on-device developer settings
      </h1>
      <p className='text-lg my-5 '>
        The Settings app on Android includes a screen called Developer options
        where you can configure system behaviors that help you profile and debug
        your app performance. For example, you can enable debugging over USB,
        capture a bug report, enable visual feedback for taps, flash window
        surfaces when they update, use the GPU for 2D graphics rendering, and
        more.
      </p>
      <h3 className='text-2xl font-bold my-6'>Enable Developer options</h3>
      <h4 className='text-lg'>
        On Android 4.1 and lower, the Developer options screen is available by
        default. On Android 4.2 and higher, you must enable this screen.
      </h4>
      <p className='text-lg my-5'>
        Before you can use the debugger and other tools, you need to enable USB
        debugging, which allows Android Studio and other SDK tools to recognize
        your device when connected via USB.
      </p>
      <p className='text-lg my-5'>
        Enable USB debugging in the device system settings under Developer
        options. You can find this option in one of the following locations,
        depending on your Android version:
      </p>
      <h3 className='text-2xl font-bold my-6'>General options</h3>
      <p className='text-lg my-5'>
        Tap <span className=' font-bold'>Quick ettings developer tisles</span>{' '}
        to add selected developer options to your Quick Settings panel.
      </p>
      <p className='text-lg my-5'>
        Once you select one or more of the available tiles, shown in figure 2,
        open the Quick Settings panel and tap the pencil to enter edit mode.
        Then, drag the developer tiles from the tiles pane onto the Quick
        settings panel, and tap the pencil again to exit edit mode.
      </p>
    </div>
  );
};

export default DeveloperSetting;
