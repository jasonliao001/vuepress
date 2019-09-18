# DataStruct

### 线性结构和非线性结构

**线性结构**

> - 集合中必存在唯一的一个“第一个元素”
> - 集合中必存在唯一的一个“最后的元素”
> - 除最后一元素之外，其它数据元素均有唯一的“后继”
> - 除第一个元素之外，其它数据元素均有唯一的“前驱”
>

**非线性结构**

> 一个节点元素可以有多个直接前驱或多个直接后继

### 栈

```javascript
class Stack {
    constructor(){
        this.items = [];
    }
    // 入栈操作
    push(element = ''){
        if(!element) return;
        this.items.push(element);
        return this;
    }
    // 出栈操作
    pop(){
        this.items.pop();
        return this;
    }
    peek(){
        return this.items[this.size() - 1];
    }
    // 打印栈数据
    print(){
        return this.items.join(' ');
    }
    // 栈是否为空
    isEmpty(){
        return this.items.length == 0;
    }
    // 返回栈的元素个数
    size(){
        return this.items.length;
    }
}
```

### 队列

```javascript
class Queue {
    constructor(){
        this.items = [];
    }
    // 入队操作
    enqueue(element = ''){
        if(!element) return;
        this.items.push(element);
        return this;
    }
    // 出队操作
    dequeue(){
        this.items.shift();
        return this;
    }
    // 查看队前元素或者说即将处理的元素
    front(){
        return this.items[0];
    }
    // 查看队列是否为空
    isEmpty(){
        return this.items.length == 0;
    }
    // 查看队列的长度
    len(){
        return this.items.length;
    }
    // 打印队列数据
    print(){
        return this.items.join(' ');
    }
}
```

### 链表

数组的优缺点

- 存储多个元素，比较常用
- 问便捷，使用下标[index]即可访问
- 数组的创建通常需要申请一段连续的内存空间，并且大小是固定的（大多数的编程语言数组都是固定的），所以在进行扩容的时候难以掌控。

```javascript
// 链表
class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.length = 0; // 链表长度
        this.head = new Node('head'); // 表头节点
    }
    /**
     * @method find 查找元素的功能，找不到的情况下直接返回链尾节点
     * @param { String } item 要查找的元素
     * @return { Object } 返回查找到的节点 
     */
    find(item = ''){
        let currNode = this.head;
        while(currNode.element != item && currNode.next){
            currNode = currNode.next;
        }
        return currNode;
    }
    /**
    * @method findPrevious 查找链表指定元素的前一个节点
    * @param { String } item 指定的元素
    * @return { Object } 返回查找到的之前元素的前一个节点，找不到节点的话返回链尾节点
    */
    findPrevious(item){
        let currNode = this.head;
        while((currNode.next != null) && (currNode.next.element != item)){
            currNode = currNode.next;
        }
        return currNode;
    }
    /**
     * @method insert 插入功能
     * @param { String } newElement 要出入的元素
     * @param { String } item 想要追加在后的元素（此元素不一定存在）
     */
    insert(newElement = '', item){
        if(!newElement) return;
        let newNode = new Node(newElement),
            currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
        this.length++;
        return this;
    }
    // 展示链表元素
    display(){
        let currNode = this.head,
            arr = [];
        while(currNode.next != null){
            arr.push(currNode.next.element);
            currNode = currNode.next;
        }
        return arr.join(' ');
    }
    // 链表的长度
    size(){
        return this.length;
    }
    // 查看链表是否为空
    isEmpty(){
        return this.length == 0;
    }
    /**
     * @method indexOf 查看链表中元素的索引
     * @param { String } element 要查找的元素
     */
    indexOf(element){
        let currNode = this.head,
            index = 0;
        while(currNode.next != null){
            index++;
            if(currNode.next.element == element){
                return index;
            }
            currNode = currNode.next;
        }
        return -1;
    }
    /**
     * @method removeEl 移除指定的元素
     * @param { String } element 
     */
    removeEl(element){
        let preNode = this.findPrevious(element);
        preNode.next = preNode.next != null ? preNode.next.next : null;
    }
}
```

### 字典

```javascript
class Dictionary {
    constructor(){
        this.items = {};
    }
    /**
     * @method set 设置字典的键值对
     * @param { String } key 键
     * @param {*} value 值
     */
    set(key = '', value = ''){
        this.items[key] = value;
        return this;
    }
    /**
     * @method get 获取某个值
     * @param { String } key 键
     */
    get(key = ''){
        return this.has(key) ? this.items[key] : undefined;
    }
    /**
     * @method has 判断是否含有某个键的值
     * @param { String } key 键
     */
    has(key = ''){
        return this.items.hasOwnProperty(key);
    }
    /**
     * @method remove 移除元素
     * @param { String } key 
     */
    remove(key){
        if(!this.has(key))  return false;
        delete this.items[key];
        return true;
    }
    // 展示字典的键
    keys(){
        return Object.keys(this.items).join(' ');
    }
    // 字典的大小
    size(){
        return Object.keys(this.items).length;
    }
    // 展示字典的值
    values(){
        return Object.values(this.items).join(' ');
    }
    // 清空字典
    clear(){
        this.items = {};
        return this;
    }
}
```

### 集合

```javascript
// 集合
class Set {
    constructor(){
        this.items = [];
    }
    /**
     * @method add 添加元素
     * @param { String } element 
     * @return { Boolean }
     */
    add(element = ''){
        if(this.items.indexOf(element) >= 0) return false;
        this.items.push(element);
        return true;
    }
    // 集合的大小
    size(){
        return this.items.length;
    }
    // 集合是否包含某指定元素
    has(element = ''){
        return this.items.indexOf(element) >= 0;
    }
    // 展示集合
    show(){
        return this.items.join(' ');
    }
    // 移除某个元素
    remove(element){
        let pos = this.items.indexOf(element);
        if(pos < 0) return false;
        this.items.splice(pos, 1);
        return true;
    }
    /**
     * @method union 并集
     * @param { Array } set 数组集合
     * @return { Object } 返回并集的对象
     */
    union(set = []){
        let tempSet = new Set();
        for(let i = 0; i < this.items.length; i++){
            tempSet.add(this.items[i]);
        }
        for(let i = 0; i < set.items.length; i++){
            if(tempSet.has(set.items[i])) continue;
            tempSet.items.push(set.items[i]);
        }
        return tempSet;
    }
    /**
     * @method intersect 交集
     * @param { Array } set 数组集合
     * @return { Object } 返回交集的对象
     */
    intersect(set = []){
        let tempSet = new Set();
        for(let i = 0; i < this.items.length; i++){
            if(set.has(this.items[i])){
                tempSet.add(this.items[i]);
            }
        }
        return tempSet;
    }
    /**
     * @method isSubsetOf 【A】是【B】的子集❓
     * @param { Array } set 数组集合
     * @return { Boolean } 返回真假值
     */
    isSubsetOf(set = []){
        if(this.size() > set.size()) return false;
        this.items.forEach*(item => {
            if(!set.has(item)) return false;
        });
        return true;
    }
}
```

### 散列表/哈希表

> 我们存储数据的时候，发生碰撞（冲突）

```javascript
// 哈希表
class HashTable {
    constructor(){
        this.table = new Array(137);
    }
    /**
     * @method hashFn 哈希函数
     * @param { String } data 传入的字符串
     * @return { Number } 返回取余的数字
     */
    hashFn(data){
        let total = 0;
        for(let i = 0; i < data.length; i++){
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }
    /**
     * 
     * @param { String } data 传入的字符串
     */
    put(data){
        let pos = this.hashFn(data);
        this.table[pos] = data;
        return this;
    }
    // 展示
    show(){
        this.table && this.table.forEach((item, index) => {
            if(item != undefined){
                console.log(index + ' => ' + item);
            }
        })
    }
    // ...获取值get函数等看官感兴趣的话自己补充测试啦
```

### 二叉查找树

 **树的定义：**

- 当`n = 0`时，称为空树；
- 对任意一棵空树`(n > 0)`，它具备以下性质：
- 树中有一个称为**根(Root)**的特殊节点，用`r(root)`表示；
- 其余节点可分为`m(m > 0)`个互不相交的有限集`T1,T2,…Tm`，其中每个集合本省又是一棵树，称为原来树的**子树（SubTree）**

- 子树之间`不可以相交`；
- 除了根节点外，每个节点有且仅有一个父节点；
- 一个`N`个节点的树有`N-1`条边。

**树的术语：**

节点的度（Degree）：节点的子树个数。

树的度：树的所有节点中最大的度数（树的度通常为节点个数的`N-1`）。

叶节点（Leaf）：度为`0`的节点（也称叶子节点）。

父节点（Parent）：有子树的节点是其子树的父节点。

子节点（Child）：若`A`节点是`B`节点的父节点，则称`B`节点是`A`节点的子节点。

兄弟节点（Sibling）：具有同一个父节点的各节点彼此是兄弟节点。

路径和路径长度：从节点`n1`到`nk`的路径为一个节点序列`n1,n2,n3,…,nk`，`ni`是`ni+1`的父节点。路径所包含边的个数为路径长度。

节点的层次（Level）：规定根节点在`第0层`，它的子节点是`第1层`，子节点的子节点是`第2层`，以此类推。

树的深度（Depth）：树中所有节点中的最大层次是这棵树的深度（因为上面是从第0层开始，深度 = 第最大层数 + 1）

**二叉树的定义：**

- 二叉树可以为空，也就是没有节点
- 二叉树若不为空，则它是由根节点和称为其左子树`TL`和右子树`RT`的两个不相交的二叉树组成
- 二叉树每个节点的子节点不允许超过`两个`

**二叉树的五种形态：**

- 空
- 只有根节点
- 只有左子树
- 只有右子树
- 左右子树均有

**二叉查找树（BST，Binary Search Tree）**

```javascript
// 二叉查找树
// 辅助节点类
class Node {
    constructor(data, left, right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
    // 展示节点信息
    show(){
        return this.data;
    }
}
class BST {
    constructor(){
        this.root = null;
    }
    // 插入数据
    insert(data){
        let n = new Node(data, null, null);
        if(this.root == null){
            this.root = n;
        }else{
            let current = this.root,
                parent = null;
            while(true){
                parent = current;
                if(data < current.data){
                    current = current.left;
                    if(current == null){
                        parent.left = n;
                        break;
                    }
                }else{
                    current = current.right;
                    if(current == null){
                        parent.right = n;
                        break;
                    }
                }
            }
        }
        return this;
    }
    // 中序遍历
    inOrder(node){
        if(!(node == null)){
            this.inOrder(node.left);
            console.log(node.show());
            this.inOrder(node.right);
        }
    }
    //   先序遍历
    preOrder(node){
        if(!(node == null)){
            console.log(node.show());
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    // 后序遍历
    postOrder(node){
        if(!(node == null)){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.show());
        }
    }
    // 获取最小值
    getMin(){
        let current = this.root;
        while(!(current.left == null)){
            current = current.left;
        }
        return current.data;
    }
    // 获取最大值
    getMax(){
        let current = this.root;
        while(!(current.right == null)){
            current = current.right;
        }
        return current.data;
    }
    // 查找给定的值
    find(data){
        let current = this.root;
        while(current != null){
            if(current.data == data){
                return current;
            }else if(data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return null;
    }
    // 移除给定的值
    remove(data){
        root = this.removeNode(this.root, data);
        return this;
    }
    // 移除给定值的辅助函数
    removeNode(node, data){
        if(node == null){
            return null;
        }
        if(data == node.data){
            // 叶子节点
            if(node.left == null && node.right == null){
                return null; // 此节点置空
            }
            // 没有左子树
            if(node.left == null){
                return node.right;
            }
            // 没有右子树
            if(node.right == null){
                return node.left;
            }
            // 有两个子节点的情况
            let tempNode = this.getSmallest(node.right); // 获取右子树
            node.data = tempNode.data; // 将其右子树的最小值赋值给删除的那个节点值
            node.right = this.removeNode(node.right, tempNode.data); // 删除指定节点的下的最小值，也就是置其为空
            return node;
        }else if(data < node.data){
            node.left = this.removeNode(node.left, data);
            return node;
        }else{
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }
    // 获取给定节点下的二叉树最小值的辅助函数
    getSmallest(node){
        if(node.left == null){
            return node;
        }else{
            return this.getSmallest(node.left);
        }
    }
}
```

### 图

**图的相关术语**

- 

- 顶点：图中的一个节点。

- 边：表示顶点和顶点之间的连线。

- 相邻顶点：由一条边连接在一起的顶点称为相邻顶点。

- 度：一个顶点的度是相邻顶点的数量。比如`0`顶点和其它两个顶点相连，`0`顶点的度就是`2`

- 路径：路径是顶点的一个连续序列。

- 简单路径：简单路径要求不包含重复的顶点。

- 回路：第一个顶点和最后一个顶点相同的路径称为回路。

- 有向图和无向图

- 有向图表示图中的`边`是`有`方向的。

- 无向图表示图中的`边`是`无`方向的。

- 带权图和无权图

- 带权图表示图中的边`有权重`。

- 无权图表示图中的边`无权重`。

  ```javascript
  // 图
  class Graph{
      constructor(v){
          this.vertices = v; // 顶点个数
          this.edges = 0; // 边的个数
          this.adj = []; // 邻接表或邻接表数组
          this.marked = []; // 存储顶点是否被访问过的标识
          this.init();
      }
      init(){
          for(let i = 0; i < this.vertices; i++){
              this.adj[i] = [];
              this.marked[i] = false;
          }
      }
      // 添加边
      addEdge(v, w){
          this.adj[v].push(w);
          this.adj[w].push(v);
          this.edges++;
          return this;
      }
      // 展示图
      showGraph(){
          for(let i = 0; i < this.vertices; i++){
              for(let j = 0; j < this.vertices; j++){
                  if(this.adj[i][j] != undefined){
                      console.log(i +' => ' + this.adj[i][j]);
                  }
              }
          }
      }
      // 深度优先搜索
      dfs(v){
          this.marked[v] = true;
          if(this.adj[v] != undefined){
              console.log("visited vertex: " + v);
          }
          this.adj[v].forEach(w => {
              if(!this.marked[w]){
                  this.dfs(w);
              }
          })
      }
      // 广度优先搜索
      bfs(v){
          let queue = [];
          this.marked[v] = true;
          queue.push(v); // 添加到队尾
          while(queue.length > 0){
              let v = queue.shift(); // 从对首移除
              if(v != undefined){
                  console.log("visited vertex: " + v);
              }
              this.adj[v].forEach(w => {
                  if(!this.marked[w]){
                      this.marked[w] = true;
                      queue.push(w);
                  }
              })
          }
      }
  }
  ```

  

