import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { ScrollArea } from '@/components/ui/scroll-area.jsx'
import { Globe, Shield, Zap, Users, TrendingUp, AlertTriangle, FileText, ExternalLink } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', title: 'Overview', icon: Globe },
    { id: 'history', title: 'Historical Background', icon: FileText },
    { id: 'conflicts', title: 'Major Conflicts', icon: Shield },
    { id: 'nuclear', title: 'Nuclear Program', icon: AlertTriangle },
    { id: 'proxy', title: 'Proxy Conflicts', icon: Users },
    { id: 'cyber', title: 'Cyber Warfare', icon: Zap },
    { id: 'economic', title: 'Economic Impact', icon: TrendingUp },
    { id: 'global', title: 'Global Consequences', icon: Globe }
  ]

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Iran-Israel Relations: Comprehensive Analysis
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                An in-depth examination of one of the most complex and volatile geopolitical dynamics in the Middle East
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Historical Context
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    From allies to adversaries: The transformation of Iran-Israel relations after the 1979 Islamic Revolution
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-red-600" />
                    Military Confrontations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Direct and proxy conflicts spanning decades, culminating in the 2025 direct military confrontation
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    Nuclear Dimension
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Iran's nuclear program development and international response, including the AMAD Project
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    Proxy Networks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Regional proxy conflicts involving Hezbollah, Hamas, and other non-state actors
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-green-600" />
                    Cyber Warfare
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Digital battleground including Stuxnet and recent cyber operations during the 2025 conflict
                  </p>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 dark:border-yellow-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-yellow-600" />
                    Global Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Economic consequences, energy market volatility, and international diplomatic responses
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-red-50 dark:from-blue-950 dark:to-red-950">
              <CardHeader>
                <CardTitle>Key Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">Historical</Badge>
                  <p className="text-sm">Iran was one of the first Muslim-majority countries to recognize Israel, but relations severed after the 1979 Islamic Revolution</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">Current</Badge>
                  <p className="text-sm">The conflict escalated to direct military confrontation in 2025, marking a significant shift from proxy warfare</p>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">Global</Badge>
                  <p className="text-sm">The conflict affects global energy markets, with the Strait of Hormuz being a critical chokepoint for oil supplies</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 'history':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Historical Background and Early Relations</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Pre-1979: Alliance Period</CardTitle>
                <CardDescription>Iran and Israel maintained cordial relations during the Pahlavi era</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  In 1947, Iran was among 13 countries that voted against the United Nations Partition Plan for the British Mandate of Palestine. 
                  However, Iran was the second Muslim-majority country to recognize Israel as a sovereign state after Turkey.
                </p>
                <p>
                  After the 1953 coup d'état, which reinstalled the pro-Western leader Mohammad Reza Pahlavi as the shah of Iran, 
                  relations between the two countries significantly improved. Both countries shared common strategic interests and viewed 
                  Arab powers as mutual threats under the "periphery doctrine."
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>1979 Revolution: The Turning Point</CardTitle>
                <CardDescription>The Islamic Revolution fundamentally changed Iran-Israel relations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  After the Iranian revolution—in which Pahlavi was ousted and Iran's secular monarchy was replaced by an anti-Western 
                  Islamic republic—Iran severed diplomatic and commercial ties with Israel. The new Iranian government saw Israel as a 
                  colonial outpost and withdrew recognition of Israel as a state.
                </p>
                <p>
                  Iran began referring to Israel as the "Zionist regime" and "occupied Palestine," adopting a hostile stance that 
                  continues to this day. Despite this official animosity, covert relations continued during the Iran–Iraq War (1980–1988).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Iran-Iraq War Cooperation</CardTitle>
                <CardDescription>Secret Israeli support during Iran's war with Iraq</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Despite the tension between the two countries, Israel provided support to Iran during the Iran–Iraq War from 1980 to 1988. 
                  During the war, Israel was one of the main suppliers of military equipment to Iran and also provided military instructors.
                </p>
                <p>
                  Israel gave direct support to Iran's war effort when it bombed and destroyed Iraq's Osirak nuclear reactor in Operation Babylon. 
                  The nuclear reactor was considered a central component of Iraq's nuclear weapons program.
                </p>
              </CardContent>
            </Card>
          </div>
        )

      case 'conflicts':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Major Conflicts and Military Confrontations</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>The Proxy War Era</CardTitle>
                <CardDescription>Decades of indirect confrontation through regional proxies</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Iran–Israel proxy war, also known as the Iran–Israel Cold War, has been ongoing since 1985. 
                  Iran has supported Lebanese Shia militias, most notably Hezbollah, in the Israeli–Lebanese conflict. 
                  In the Israeli-Palestinian conflict, Iran has backed Palestinian groups such as Hamas and Palestinian Islamic Jihad.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-red-600">Iranian Proxies</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Hezbollah (Lebanon)</li>
                      <li>• Hamas (Gaza)</li>
                      <li>• Palestinian Islamic Jihad</li>
                      <li>• Houthis (Yemen)</li>
                      <li>• Various Shia militias (Iraq, Syria)</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-600">Israeli Responses</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Support for Iranian opposition groups</li>
                      <li>• Airstrikes in Syria</li>
                      <li>• Assassination of nuclear scientists</li>
                      <li>• Cyber operations</li>
                      <li>• Intelligence operations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Major Military Confrontations</CardTitle>
                <CardDescription>Key conflicts and escalations over the decades</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold">2006 Lebanon War</h4>
                    <p className="text-sm text-muted-foreground">
                      Israel fought a war with Hezbollah, Iran's primary proxy in Lebanon, resulting in significant casualties and infrastructure damage.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold">Gaza Wars (2008-2023)</h4>
                    <p className="text-sm text-muted-foreground">
                      Multiple conflicts between Israel and Hamas, with Iran providing financial and military support to Palestinian groups.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold">2024 Escalation</h4>
                    <p className="text-sm text-muted-foreground">
                      The proxy war escalated to a series of direct confrontations between the two countries.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-4">
                    <h4 className="font-semibold">2025 Direct War</h4>
                    <p className="text-sm text-muted-foreground">
                      The Iran–Israel war began in June 2025, involving direct military strikes and U.S. intervention.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 'nuclear':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Iran's Nuclear Program</h2>
            
            <Card className="border-orange-200 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  Program Overview
                </CardTitle>
                <CardDescription>Development timeline and international concerns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Iran's nuclear program began in the 1950s under the Pahlavi dynasty with United States support. 
                  It expanded in the 1970s with plans for power reactors, paused after the 1979 Iranian Revolution, 
                  and resumed secretly during the 1980s Iran–Iraq War.
                </p>
                <p>
                  Undeclared enrichment sites at Natanz and Arak were exposed in 2002, and Fordow, an underground 
                  fuel enrichment site, was revealed in 2009. These revelations sparked international concern about 
                  Iran's nuclear intentions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The AMAD Project</CardTitle>
                <CardDescription>Iran's secret nuclear weapons research program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  In the late 1990s Iran launched a nuclear weapons research program, codenamed the AMAD Project, 
                  under the aegis of the Iranian Ministry of Defense. According to later IAEA findings, the AMAD Project 
                  (led by Mohsen Fakhrizadeh, a top nuclear scientist) aimed to design and build an arsenal of five nuclear 
                  warheads by the mid-2000s.
                </p>
                <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">AMAD Project Achievements (1999-2003)</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Acquired and improved warhead designs</li>
                    <li>• Conducted high-explosive tests</li>
                    <li>• Developed detonators for implosion-type bombs</li>
                    <li>• Manufactured nuclear weapon components with surrogate materials</li>
                    <li>• Integrated warhead design into Shahab-3 ballistic missile system</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Nuclear Facilities</CardTitle>
                <CardDescription>Major sites in Iran's nuclear infrastructure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="border rounded-lg p-3">
                      <h4 className="font-semibold">Natanz</h4>
                      <p className="text-sm text-muted-foreground">
                        Uranium enrichment center built to house thousands of centrifuges
                      </p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-semibold">Arak</h4>
                      <p className="text-sm text-muted-foreground">
                        Heavy water production plant and 40 MW heavy-water reactor (IR-40)
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="border rounded-lg p-3">
                      <h4 className="font-semibold">Fordow</h4>
                      <p className="text-sm text-muted-foreground">
                        Underground fuel enrichment site revealed in 2009
                      </p>
                    </div>
                    <div className="border rounded-lg p-3">
                      <h4 className="font-semibold">Bushehr</h4>
                      <p className="text-sm text-muted-foreground">
                        Nuclear power plant with Russian assistance
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 'proxy':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Proxy Conflicts and Regional Dynamics</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Regional Theaters of Conflict</CardTitle>
                <CardDescription>How the Iran-Israel rivalry plays out across the Middle East</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold">Lebanon</h4>
                      <p className="text-sm text-muted-foreground">
                        Iran's strong support for Hezbollah has transformed the group into a formidable military and political force, 
                        posing a significant threat to Israel's northern border.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">Palestinian Territories</h4>
                      <p className="text-sm text-muted-foreground">
                        Iran's backing of Hamas and Palestinian Islamic Jihad has fueled the Israeli-Palestinian conflict, 
                        providing these groups with financial aid, weapons, and training.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Syria</h4>
                      <p className="text-sm text-muted-foreground">
                        The Syrian civil war has become a major battleground for the Iran-Israel proxy conflict, 
                        with Iran supporting Assad and Israel conducting airstrikes against Iranian targets.
                      </p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-semibold">Yemen</h4>
                      <p className="text-sm text-muted-foreground">
                        The Houthi movement in Yemen, backed by Iran, has engaged in missile and drone attacks 
                        against Saudi Arabia and, more recently, against Israel.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Escalation to Direct Confrontation</CardTitle>
                <CardDescription>The shift from proxy warfare to direct military engagement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  While traditionally a proxy conflict, tensions escalated significantly in 2024 and 2025, leading to direct 
                  military confrontations between Iran and Israel. This shift marked a new and dangerous phase in their long-standing rivalry.
                </p>
                <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">2025 Direct Conflict</h4>
                  <p className="text-sm">
                    The recent direct conflict, which began in June 2025, involved missile strikes and cyberattacks from both sides, 
                    with Israel reportedly targeting Iranian nuclear and military facilities, and Iran retaliating with aerial attacks. 
                    This escalation has drawn in other international actors, including the United States.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regional Alliance Shifts</CardTitle>
                <CardDescription>How the conflict has reshaped Middle Eastern geopolitics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Iran-Israel proxy conflict has reshaped regional dynamics in the Middle East. It has contributed to the formation 
                  of an informal alliance between Israel and several Arab states, particularly Saudi Arabia and the UAE, who share concerns 
                  about Iran's growing influence.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Anti-Iran Coalition</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Israel</li>
                      <li>• Saudi Arabia</li>
                      <li>• United Arab Emirates</li>
                      <li>• Bahrain</li>
                      <li>• United States</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Iran's Axis of Resistance</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Iran</li>
                      <li>• Syria</li>
                      <li>• Hezbollah</li>
                      <li>• Hamas</li>
                      <li>• Houthis</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 'cyber':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Cyber Warfare</h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-600" />
                  The Digital Battlefield
                </CardTitle>
                <CardDescription>How cyber warfare has become a key dimension of the Iran-Israel conflict</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Cyber warfare has become a significant dimension of the Iran-Israel conflict, operating largely in the shadows 
                  but with tangible impacts. Both nations possess advanced cyber capabilities and have engaged in offensive and 
                  defensive cyber operations against each other's critical infrastructure, government systems, and financial institutions.
                </p>
                <p>
                  These cyberattacks often serve as a means of asymmetric warfare, allowing both sides to inflict damage and 
                  gather intelligence without direct military confrontation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stuxnet: The Game Changer</CardTitle>
                <CardDescription>Operation Olympic Games and its impact on Iran's nuclear program</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Operation Olympic Games (2010)</h4>
                  <p className="text-sm mb-3">
                    The Stuxnet computer worm, discovered in 2010, is widely believed to be a joint US-Israeli operation 
                    aimed at sabotaging Iran's nuclear program.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">Target</Badge>
                      <span className="text-sm">Iranian centrifuges at Natanz enrichment facility</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">Impact</Badge>
                      <span className="text-sm">Successfully damaged centrifuges, setting back the program by several years</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-0.5">Significance</Badge>
                      <span className="text-sm">First known cyberweapon to cause physical damage to infrastructure</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Cyber Operations (2025)</CardTitle>
                <CardDescription>Intensified cyberattacks during the direct conflict</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-blue-600 mb-2">Israeli Cyber Operations</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Disabled Iranian radar systems</li>
                        <li>• Targeted electronic warfare stations</li>
                        <li>• Disrupted communications networks</li>
                        <li>• Attacked financial infrastructure</li>
                      </ul>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-red-600 mb-2">Iranian Cyber Operations</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Disinformation campaigns</li>
                        <li>• Psychological warfare operations</li>
                        <li>• Attacks on Israeli infrastructure</li>
                        <li>• Financial system targeting</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-yellow-700 dark:text-yellow-300">Hacktivist Involvement</h4>
                    <p className="text-sm">
                      The conflict has also seen hacktivist groups aligning with either side, further complicating the cyber landscape 
                      and expanding the scope of digital warfare beyond state actors.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cyber Warfare Challenges</CardTitle>
                <CardDescription>Unique aspects and risks of digital conflict</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <AlertTriangle className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <h4 className="font-semibold">Deniability</h4>
                    <p className="text-sm text-muted-foreground">
                      Difficult to attribute attacks with certainty
                    </p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Zap className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-semibold">Rapid Escalation</h4>
                    <p className="text-sm text-muted-foreground">
                      Potential for quick expansion of conflict scope
                    </p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                    <h4 className="font-semibold">Civilian Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      Attacks on critical infrastructure affect civilians
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 'economic':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Economic Impact</h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Global Economic Implications
                </CardTitle>
                <CardDescription>How the Iran-Israel conflict affects the world economy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The conflict between Israel and Iran has significant economic implications, particularly for global energy markets 
                  and supply chains. The severity of these impacts largely depends on the duration and intensity of the conflict, 
                  particularly whether it remains contained or escalates into a broader regional war.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle>Energy Market Volatility</CardTitle>
                <CardDescription>The critical role of the Strait of Hormuz</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">Strait of Hormuz</h4>
                  <p className="text-sm mb-3">
                    A narrow waterway separating Iran from the Gulf states, channeling roughly one-third of the world's seaborne oil.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Risk</Badge>
                      <span className="text-sm">Any disruption could push Brent crude above $100 per barrel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Impact</Badge>
                      <span className="text-sm">Global inflation and slower economic growth</span>
                    </div>
                  </div>
                </div>
                <p>
                  Rising oil prices increase production costs across various sectors, leading to higher inflation and slower economic 
                  growth globally. This is especially true for energy-intensive goods like food, clothing, and chemicals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Market Reactions</CardTitle>
                <CardDescription>How markets respond to geopolitical tensions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-red-600">Market Volatility</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Stock market fluctuations</li>
                      <li>• Initial dips followed by potential recoveries</li>
                      <li>• Increased demand for safe-haven assets</li>
                      <li>• Gold price increases</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-600">Sector Winners</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Defense contractors</li>
                      <li>• Oil companies</li>
                      <li>• Precious metals</li>
                      <li>• Alternative energy</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trade and Supply Chain Disruptions</CardTitle>
                <CardDescription>Beyond energy: broader economic consequences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <TrendingUp className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <h4 className="font-semibold">Shipping Costs</h4>
                    <p className="text-sm text-muted-foreground">
                      Increased costs and delays in global trade routes
                    </p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <h4 className="font-semibold">Aviation Sector</h4>
                    <p className="text-sm text-muted-foreground">
                      Flight suspensions and airspace closures
                    </p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-semibold">Tourism Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      Regional tourism disruption and travel advisories
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Central Bank Challenges</h4>
                  <p className="text-sm">
                    Central banks, already grappling with inflation, would face reduced flexibility in their monetary policies 
                    as energy price increases add to inflationary pressures.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      case 'global':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Global Impacts and International Consequences</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Geopolitical Shifts</CardTitle>
                <CardDescription>How the conflict is reshaping regional and global power dynamics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-blue-600">Regional Realignment</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Israel-Arab state informal alliance</li>
                      <li>• Weakening of Iran's regional influence</li>
                      <li>• New security architectures emerging</li>
                      <li>• Traditional alliances being tested</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-red-600">Global Power Dynamics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• US influence and intervention tested</li>
                      <li>• Russia's balancing act between sides</li>
                      <li>• China's limited leverage exposed</li>
                      <li>• European diplomatic efforts strained</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Responses</CardTitle>
                <CardDescription>How major powers are responding to the conflict</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">United States</h4>
                    <p className="text-sm text-muted-foreground">
                      Direct military intervention in 2025, bombing Iranian nuclear sites while supporting Israel's right to self-defense. 
                      Balancing support for Israel with efforts to prevent wider regional war.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold">Russia</h4>
                    <p className="text-sm text-muted-foreground">
                      Attempting to maintain relationships with both sides while positioning itself as a potential mediator. 
                      Benefits economically from higher oil prices but constrained by Ukraine war.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold">China</h4>
                    <p className="text-sm text-muted-foreground">
                      Condemning Israeli actions while maintaining economic ties with Iran. Limited political leverage 
                      despite economic interests in Middle Eastern oil and Belt and Road Initiative.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">European Union</h4>
                    <p className="text-sm text-muted-foreground">
                      Internal divisions over approach, focusing on diplomacy and preservation of Iran nuclear deal (JCPOA). 
                      Calls for de-escalation while providing humanitarian aid.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Humanitarian and Social Consequences</CardTitle>
                <CardDescription>The human cost of the conflict</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg border-red-200 dark:border-red-800">
                    <Users className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <h4 className="font-semibold">Displacement</h4>
                    <p className="text-sm text-muted-foreground">
                      Civilian casualties and displacement exacerbating humanitarian crises
                    </p>
                  </div>
                  <div className="text-center p-4 border rounded-lg border-green-200 dark:border-green-800">
                    <Globe className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <h4 className="font-semibold">Environmental</h4>
                    <p className="text-sm text-muted-foreground">
                      Military strikes causing environmental damage with long-term consequences
                    </p>
                  </div>
                  <div className="text-center p-4 border rounded-lg border-orange-200 dark:border-orange-800">
                    <AlertTriangle className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                    <h4 className="font-semibold">Radicalization</h4>
                    <p className="text-sm text-muted-foreground">
                      Prolonged conflict fostering extremism and new cycles of violence
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Future Scenarios</CardTitle>
                <CardDescription>Potential trajectories for Iran-Israel relations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-yellow-700 dark:text-yellow-300">Continued Covert Warfare</h4>
                    <p className="text-sm">
                      Both sides likely to continue covert operations, cyber warfare, and support for proxy groups 
                      across the region despite any ceasefire agreements.
                    </p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">Regional Arms Race</h4>
                    <p className="text-sm">
                      The conflict could accelerate an arms race in the region, with countries seeking to bolster 
                      their military capabilities and develop advanced weaponry, including potentially nuclear weapons.
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Diplomatic Opportunities</h4>
                    <p className="text-sm">
                      The severity of the recent conflict might spur renewed international diplomatic efforts 
                      to de-escalate tensions and find a long-term solution.
                    </p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-orange-700 dark:text-orange-300">Broader Conflict Risk</h4>
                    <p className="text-sm">
                      The risk of a wider regional war involving other major powers remains a significant concern, 
                      as regional conflicts are increasingly interconnected.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )

      default:
        return <div>Select a section to view content</div>
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 lg:flex-shrink-0">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Navigation</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[calc(100vh-200px)]">
                  <div className="space-y-1 p-4">
                    {sections.map((section) => {
                      const Icon = section.icon
                      return (
                        <Button
                          key={section.id}
                          variant={activeSection === section.id ? "default" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => setActiveSection(section.id)}
                        >
                          <Icon className="mr-2 h-4 w-4" />
                          {section.title}
                        </Button>
                      )
                    })}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <ScrollArea className="h-[calc(100vh-100px)]">
              <div className="pr-4">
                {renderContent()}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              This comprehensive analysis examines the complex relationship between Iran and Israel, 
              covering historical, political, military, economic, and social dimensions.
            </p>
            <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
              <span>Created by</span>
              <Badge variant="outline">A Human</Badge>
              <span>•</span>
              <span>July 2025</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App


