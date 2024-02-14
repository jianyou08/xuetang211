
    document.addEventListener("DOMContentLoaded", function() {  
        const contentDiv = document.getElementById("content");  
        const jsonUrl = "data.json"; // JSON文件路径，假设与HTML文件在同一目录下  
        let itemsPerRow = 4; // 默认每行显示4个数据项  
  
        // 检查浏览器宽度并调整每行显示的数据项数量  
        if (window.innerWidth <= 767) {  
            itemsPerRow = 2; // 在小屏幕设备（如手机）上每行显示1个数据项  
        }

        console.log("itemsPerRow="+itemsPerRow)
  
        // 加载JSON数据并动态创建表格  
        fetch(jsonUrl)  
            .then(response => response.json())  
            .then(data => {  
                if (data.length > 0) {  
                    const table = document.createElement("table");  
                    const thead = document.createElement("thead");  
                    const tbody = document.createElement("tbody");  
                      
                    // 创建表头  
                    // const headerRow = document.createElement("tr");  
                    // const headers = ["标题", "描述信息", "主图"];  
                    // headers.forEach(headerText => {  
                    //     const th = document.createElement("th");  
                    //     th.textContent = headerText;  
                    //     headerRow.appendChild(th);  
                    // });  
                    // thead.appendChild(headerRow);  
                    // table.appendChild(thead);   

                    for (let i = 0; i < data.length;) {
                        let imgRow = document.createElement("tr");  
                        let descRow = document.createElement("tr"); 
                        tbody.appendChild(imgRow);  
                        tbody.appendChild(descRow);  
                        for (let j = 0; j < itemsPerRow && i < data.length; j++, i++) {
                            item = data[i];
                            const tdImg = document.createElement("td");  
                            const img = document.createElement("img");  
                            img.src = item.img;  
                            img.alt = item.title;  
                            tdImg.appendChild(img);  
                            imgRow.appendChild(tdImg); 

                            const tdDesc = document.createElement("td");  
                            tdDesc.textContent = item.desc;  
                            descRow.appendChild(tdDesc);   
                        }
                    }
  
                    // data.forEach((item, index) => {  
                    //     if (itemsInCurrentRow >= itemsPerRow) {  
                    //         // 开始新的一行  
                    //         currentRow = document.createElement("tr");  
                    //         tbody.appendChild(currentRow);  
                    //         itemsInCurrentRow = 0;  
                    //     }  
  
                    //     const tdTitle = document.createElement("td");  
                    //     tdTitle.textContent = item.title;  
                    //     currentRow.appendChild(tdTitle);  
  
                    //     const tdDesc = document.createElement("td");  
                    //     tdDesc.textContent = item.desc;  
                    //     currentRow.appendChild(tdDesc);  
  
                    //     const tdImg = document.createElement("td");  
                    //     const img = document.createElement("img");  
                    //     img.src = item.img;  
                    //     img.alt = item.title;  
                    //     tdImg.appendChild(img);  
                    //     currentRow.appendChild(tdImg);  

                    //     const tdTitle = document.createElement("td");  
                    //     tdTitle.textContent = item.title;  
                    //     currentRow.appendChild(tdTitle);  
  
                    //     const tdDesc = document.createElement("td");  
                    //     tdDesc.textContent = item.desc;  
                    //     currentRow.appendChild(tdDesc);  
  
                    //     itemsInCurrentRow++;  
                    // });  
  
                    table.appendChild(tbody);  
                    contentDiv.appendChild(table);  
                } else {  
                    contentDiv.textContent = "没有数据可显示";  
                }  
            })  
            .catch(error => {  
                console.error("加载JSON数据时出错:", error);  
                contentDiv.textContent = "加载数据时出错";  
            });  
    });  