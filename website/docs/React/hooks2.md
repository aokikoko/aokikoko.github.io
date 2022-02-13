---
title: "[React] hooks-其他hook"
sidebar_position: 11
---
## 自定义hook

```jsx title="继续获取鼠标位置的示例"
// 使用hooks实现猫跟着鼠标移动
function Cat() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const move = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };
  useEffect(() => {
    document.addEventListener("mousemove", move);
    console.log(111);
    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);
  return (
    <>
      <img
        src={img}
        alt=""
        style={{ position: "absolute", left: position.x, top: position.y }}
      ></img>
    </>
  );
}
```

除了使用内置的 Hooks之外, 还可以创建自己的Hooks (自定义Hooks)

使用场景: **将组件状态逻辑提取到可重用的函数(自定义Hooks)中, 实现状态逻辑复用**

内置Hooks为函数组件赋予了class组件的功能; 在此之上, 自定义Hooks针对不同组件实现不同状态逻辑复用

- 自定义Hooks是一个函数, **约定函数名称必须以use开头, React就是通过函数名称是否以use开头来判断是不是Hooks**
- Hooks只能在函数组件中或其他自定义Hooks中使用, 否则, 会报错!
- 自定义Hooks用来提取组件的状态逻辑, 根据不同功能可以有不同的参数和返回值(就像普通函数一样)

### 提取到自定义hooks

```js title="自定义hook useMouse"
function useMouse() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const move = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };
  useEffect(() => {
    document.addEventListener("mousemove", move);
    console.log(111);
    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return position;
}

// 使用hooks实现猫跟着鼠标移动
function Cat() {
  const { x, y } = useMouse();

  return (
    <>
      <img
        src={img}
        alt=""
        style={{ position: "absolute", left: x, top: y }}
      ></img>
    </>
  );
}
```