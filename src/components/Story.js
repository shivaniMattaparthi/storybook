import React from "react";
import {
  Document,
  Page,
  View,
  Image,
  Text,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";
import pic1 from "./M1.jpg";
import pic2 from "./M2.jpg";
import pic3 from "./M3.jpg";
import pic4 from "./M4.jpg";
import pic5 from "./M5.jpg";
import story1 from "./S1.jpg";
import story2 from "./S2.jpg";

Font.register({
  family: "Rock Salt",
  src: "/fonts/Rock_Salt/RockSalt-Regular.ttf",
});

const styles = StyleSheet.create({
  page: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "#87CEEB", // Sky blue
  },
  sky: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "25%", // Reduced height
    backgroundColor: "#87CEEB",
  },
  ground: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "40%",
    backgroundColor: "#98FB98",
  },
  pond: {
    position: "absolute",
    bottom: "-5%", // Slightly extend downward
    left: "-8%", // Move to the edge
    width: "55%",
    height: "30%",
    backgroundColor: "#AEEEEE", // Light blue for water
    borderTopRightRadius: 150,
  },
  title: {
    position: "absolute",
    top: "3%",
    left: "10%",
    width: "80%",
  },
  tree1: {
    position: "absolute",
    top: "50%",
    left: "10%",
    width: 100,
    height: 100,
  },
  tree2: {
    position: "absolute",
    bottom: "38%",
    left: "55%",
    width: 120,
    height: 120,
  },
  tree3: {
    position: "absolute",
    bottom: "15%",
    right: "5%",
    width: 130,
    height: 130,
  },
  boy: {
    position: "absolute",
    bottom: "10%",
    left: "38%",
    width: 170,
    height: 170,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  footerText: {
    fontSize: 10,
    color: "#000",
  },
  footerLogo2: {
    width: 150,
    height: 100,
  },
  footerLogo1: {
    width: 80,
    height: 40,
  },

  // Styles for the Second Page
  secondPage: {
    position: "relative",
    width: "90%", // White margin effect
    height: "90%",
    backgroundColor: "#87CEEB", // Sky blue background
    margin: "5%", // Creates white margin
    borderRadius: 20, // Rounded edges
    padding: 20, // Inner spacing
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  secondPageLogo: {
    top: "3%",
    width: "80%",
  },
  secondPageText: {
    fontSize: 18,
    fontFamily: "Courier",
    color: "#333",
    textAlign: "center",
    marginTop: 20,
    padding: 15,
    fontWeight: "bold",
  },
  secondPageFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  thirdPage: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    textAlign: "center",
    padding: 30,
    backgroundColor: "white",
  },
  monkeyIcon: {
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  thirdPageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  thirdPageText: {
    fontSize: 16,
    color: "#333",
    width: "80%",
    marginBottom: 30,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },
  socialIcon: {
    width: 30, // Icon size
    height: 30,
    marginHorizontal: 10, // Spacing between icons
    gap: 30,
  },
  storypage1: {
    backgroundColor: "white",
  },
  storytext: {
    fontFamily: "Rock Salt",
    fontSize: 18,
    color: "black",
    fontWeight: "400",
    paddingVertical: 18,
    paddingHorizontal: 46,
    lineHeight: 2,
    textAlign: "center",
  },
  storyimage: {
    width: "100%",
    height: 650,
  },
  storypage2: {
    backgroundColor: "rgb(250, 236, 236)",
  },
  storyimage2: {
    width: "100%",
    height: 550,
  },
  storypage3: {
    backgroundColor: "rgb(229, 241, 247)",
    padding: 20,
    margin: 10,
    border: "8px solid rgb(17, 66, 87)",
  },
  summarytext: {
    fontFamily: "Rock Salt",
    fontSize: 12,
    color: "black",
    fontWeight: "300",

    lineHeight: 3.5,
    textAlign: "center",
  },
  page1: {
    backgroundColor: "rgb(162, 204, 224)",
  },
  advertisement: {
    color: "rgb(17, 66, 87)",
    fontSize: 16,
    textAlign: "right",
    marginTop: 4,
    marginRight: 2,
  },
  heading: {
    fontSize: 60,
    fontWeight: "900",
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
    color: "rgb(28, 85, 109)",
    paddingTop: 20,
  },
  section: {
    marginBottom: 10,
  },

  text: {
    fontSize: 22,
    color: "rgb(2, 54, 77)",
    fontFamily: "Courier",
    textAlign: "center",
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 17,
    lineHeight: 1.5,
  },
  button: {
    color: "white",
    textAlign: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "900",
    border: "1px solid rgb(224, 73, 75)",
    backgroundColor: "rgb(224, 73, 75)",
  },
  image1: {
    height: 400,
    width: "100%",
    alignSelf: "center",
    marginTop: 15,
  },
  footerr: {
    borderTop: "5px solid rgb(40, 139, 182)",
    backgroundColor: "white",
    padding: 0,
  },
  image2: {
    width: "50%",
    height: 100,
    alignSelf: "flex-end",
  },
  footerrText: {
    color: "gray",
    fontSize: 22,
    paddingTop: "5",
  },
  websitename: {
    color: "rgb(224, 73, 75)",
    fontSize: "26",
    padding: "2",
    fontFamily: "Courier",
  },
  page2: {
    backgroundColor: "rgb(162, 204, 224)",
  },
  image3: {
    marginTop: 70,
    width: "100%",
    height: 200,
  },
  container: {
    borderWidth: 2,
    borderColor: "hsl(0, 5.90%, 96.70%)",
    backgroundColor: "hsl(0, 9.70%, 93.90%)",
    borderRadius: 400,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    marginBottom: 0,
  },
  moraltext: {
    fontFamily: "Courier",
    fontWeight: "bold",
    fontSize: "20",
    textAlign: "center",
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  thankutext: {
    fontFamily: "Courier",
    fontWeight: "900",
    fontSize: "22",
    textAlign: "center",
    color: "rgb(252, 101, 1)",
    paddingHorizontal: 40,
  },
  iconcontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 25,
    marginTop: 20,
  },
  icon: {
    width: 35,
    height: 35,
  },
  footer2: {
    backgroundColor: "white",
    borderTop: "25px solid rgb(129, 199, 72)",
  },
  footerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footerimage: {
    width: "40%",
    height: 200,
  },
});

const Story = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.sky} />
      <View style={styles.ground} />
      <View style={styles.pond} />

      <Image src="/Page1Assets/title.png" style={styles.title} />

      <Image src="/Page1Assets/tree.png" style={styles.tree1} />
      <Image src="/Page1Assets/tree.png" style={styles.tree2} />
      <Image src="/Page1Assets/tree.png" style={styles.tree3} />

      <Image src="/Page1Assets/boy.png" style={styles.boy} />

      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>
          By T. Albert Illustrated by www.maaillustrations.com
        </Text>
        <Image src="/Page1Assets/footerlog.png" style={styles.footerLogo1} />
      </View>
    </Page>

    <Page size="A4">
      <View style={styles.secondPage}>
        <Image src="/Page1Assets/title.png" style={styles.secondPageLogo} />

        <Text style={styles.secondPageText}>
          I found a frog with a unique transformation. Tadpole into a frog. It
          is fun, educational, and just may have you catching a tadpole so you
          and your child can see it for yourself.
        </Text>

        <View style={styles.secondPageFooter}>
          <Image src="/Page1Assets/footerlog.png" style={styles.footerLogo2} />
        </View>
      </View>
    </Page>

    <Page size="A4" style={styles.thirdPage}>
      <Image src="/Page1Assets/monkey-icon.png" style={styles.monkeyIcon} />

      <Text style={styles.thirdPageTitle}>
        Dear <Text style={{ color: "#e60073" }}>Supporter</Text>,
      </Text>

      <Text style={styles.thirdPageText}>
        Thank you for downloading our{" "}
        <Text style={{ color: "#800080" }}>children’s book</Text>.{"\n"}{" "}
        <Text style={{ color: "#6666ff" }}>Monkey Pen’s</Text> vision is to
        provide thousands of{" "}
        <Text style={{ color: "#ff3300" }}>free children’s books</Text> to young
        readers around the globe.
      </Text>

      <Text style={styles.thirdPageText}>
        Please <Text style={{ color: "#00802b" }}>share our books</Text> share
        our books with friends and family to{" "}
        <Text style={{ color: "#ff3300" }}>support our mission</Text>. Thank
        you!
      </Text>
      <View style={styles.socialIconsContainer}>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
          style={styles.socialIcon}
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          style={styles.socialIcon}
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          style={styles.socialIcon}
        />
      </View>
      <Text style={styles.thirdPageText}>
        Please make a
        <Text style={{ color: "#e60073" }}>Donation on Patreon</Text> to support
        Monkey Pens Free Book Project :
      </Text>
      <Link
        src="https://www.maaillustrations.com"
        style={{
          backgroundColor: "#FFBF00",
          color: "white",
          padding: "5px 10px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        Donate
      </Link>
    </Page>
    <Page size="A4" style={styles.storypage1}>
      <Text style={styles.storytext}>
        Even though I have grandchildren of my own,it seems like it was only
        yesterday when I returned home from school to find a frog in my bedroom.
      </Text>
      <Image src={story1} style={styles.storyimage}></Image>
    </Page>
    <Page size="A4" style={styles.storypage2}>
      <Text style={styles.storytext}>
        My mother just chuckled when I yelled out, "I found a frog on my
        bed".Now, she knew that I would eventually find one but she left me
        discover a wonder of Nature that many people miss.
      </Text>
      <Image src={story2} style={styles.storyimage2}></Image>
      <Text style={styles.storytext}>I am glad she did.</Text>
    </Page>
    <Page style={styles.storypage3}>
      <Text style={styles.summarytext} wrap={false}>
        One afternoon, as I walked by the pond, I saw something small and wiggly
        in the water. It had a round head, a tiny mouth, and a long, swishy
        tail. "A fish?" I thought. But no—it was a tadpole! I decided to check
        on it every day. Day 1: The tadpole zoomed around the water, flicking
        its tail. It looked happy. Day 5: Tiny bumps appeared where legs should
        be. "You're growing!" I whispered. Day 10: Two strong back legs kicked
        through the water. It wasn't just a swimmer anymore! Day 15: Front legs
        appeared, and the tadpole started looking like a real frog. Day 20: Its
        tail shrank smaller and smaller... Then, one morning, it was gone! I
        looked around and spotted a tiny green frog sitting on a rock. It
        blinked at me, then—BOING!—hopped away into the tall grass. I smiled. I
        had found a frog... and watched it grow!
      </Text>
    </Page>
    <Page size="A4" style={styles.page1}>
      <Text style={styles.advertisement}>Advertisement</Text>
      <View style={styles.section}>
        <Text style={styles.heading}>Your Story Book!</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>
          A book specially made, with you as the main hero or heroine
        </Text>
      </View>
      <Text style={styles.button}>Discover More </Text>
      <View>
        <Image src={pic1} style={styles.image1}></Image>
      </View>
      <View style={styles.footerr}>
        <Text style={styles.footerrText}>Personalised Children's gift by </Text>
        <Text style={styles.websitename}>www.monkeypen.com</Text>
        <Image src={pic2} style={styles.image2} wrap={false}></Image>
      </View>
    </Page>
    <Page size="A4" style={styles.page2}>
      <View>
        <Image src={pic3} style={styles.image3}></Image>
      </View>
      <View style={styles.container}>
        <Text style={styles.moraltext}>
          I found a Frog is a story describing the unique transformation of a
          tadpole into a frog.It is fun, educational and just may have you
          catching a tadpole so you and your child can see it for yourself.
        </Text>
        <Text style={styles.thankutext}>
          Please share our books with your friends and family to support our
          mission.Thankyou!
        </Text>
        <View style={styles.iconcontainer}>
          {/* Facebook */}
          <Image
            src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
            style={styles.icon}
          />
          {/* whatsapp */}
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
            style={styles.icon}
          />
          {/* LinkedIn */}
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.footer2}>
        <View style={styles.footerContainer}>
          <Image src={pic4} style={styles.footerimage} wrap={false}></Image>
          <Image src={pic5} style={styles.footerimage} wrap={false}></Image>
        </View>
      </View>
       <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "skyblue", // Sky blue background
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontFamily:"Rock Salt",
          fontWeight: "bold",
          color: "white", 
          textAlign: "center",
          textTransform: "uppercase", 
          letterSpacing: 2, 
        }}
      >
        Thank You!
      </Text>
    </View>
    </Page>
  </Document>
);

export default Story;
