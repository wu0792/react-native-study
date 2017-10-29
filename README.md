
## FlatList与ScrollView的选择：

[官方文档说明](http://facebook.github.io/react-native/docs/scrollview.html)

### FlatList使用
```
        let i = Array(1000).fill(0).map((v, i) => { return { key: i } })
        return (
            <FlatList
                data={i}
                renderItem={({ item }) => <Text>{item.key}</Text>}
            />
        )
```

需要注意的是，FlatList使用模型对象的key属性名作为渲染时候的唯一标识，如果模型自身不包含需要自己添加，一般直接使用数组索引作为key，类似React中渲染数组时为组件添加的key属性名称

### ScrollView使用
```
        let i = Array(1000).fill(0).map((v, i) => { return { key: i } })
        return (
            <ScrollView>
                {i.map(v => <Text key={v.key}>{v.key}</Text>)}
            </ScrollView>
        )
```

