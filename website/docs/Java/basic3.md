---
slug: basic3
title: "[Java] java基础概念(下)"
sidebar_position: 3
---

## static

### static内存图

![static](assets/static.jpg)

![ic](assets/ic.jpg)

### javabean类

- 用来描述一类事物的类. 比如, Student, Teacher, Dog, Cat等

### 测试类

- 用来检查其他类是否书写正确, 带有main方法的类, 是程序的入口

### 工具类

- 帮我们做一些事情的类

#### 编写一个工具类

```java
package com.itheima.a02;

public class ArrayUtil {

//    私有化构造方法
//    目的: 不让外界创建他的对象
    private ArrayUtil() {}

//    需要定义为静态的, 方便调用
    public static String printArr(int[] arr) {
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (int i = 0; i < arr.length; i++) {
            if(i == arr.length - 1){
                sb.append(arr[i]);

            } else {
                sb.append(arr[i]).append(",");
            }
        }
        sb.append("]");
        return sb.toString();
    }

    public static double getAerage(double[] arr) {
        double sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        return sum / arr.length;
    }
}

package com.itheima.a02;

public class TestDemo {
    public static void main(String[] args) {
//        测试工具类中的两个方法是否正确

        int[] arr1 = {1,2,3,4,5};
        String str = ArrayUtil.printArr(arr1);
        System.out.println(str);

        double[] arr2 = {1.5, 3.7, 4.9, 5.9};
        double avg = ArrayUtil.getAerage(arr2);
        System.out.println(avg);
    }
}

```

### static的注意事项

- 静态方法只能访问静态
- 静态方法中没有this关键字

- 静态随着类的加载而加载
- 非静态跟对象有关